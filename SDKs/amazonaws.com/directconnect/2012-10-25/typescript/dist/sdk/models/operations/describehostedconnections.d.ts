import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHostedConnectionsXAmzTargetEnum {
    OvertureServiceDescribeHostedConnections = "OvertureService.DescribeHostedConnections"
}
export declare class DescribeHostedConnectionsRequest extends SpeakeasyBase {
    describeHostedConnectionsRequest: shared.DescribeHostedConnectionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHostedConnectionsXAmzTargetEnum;
}
export declare class DescribeHostedConnectionsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    connections?: shared.Connections;
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
