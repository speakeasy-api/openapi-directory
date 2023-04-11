import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionsXAmzTargetEnum {
    OvertureServiceDescribeConnections = "OvertureService.DescribeConnections"
}
export declare class DescribeConnectionsRequest extends SpeakeasyBase {
    describeConnectionsRequest: shared.DescribeConnectionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionsXAmzTargetEnum;
}
export declare class DescribeConnectionsResponse extends SpeakeasyBase {
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
