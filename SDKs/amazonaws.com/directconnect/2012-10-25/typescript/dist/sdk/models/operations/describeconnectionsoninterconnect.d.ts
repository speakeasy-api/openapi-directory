import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionsOnInterconnectXAmzTargetEnum {
    OvertureServiceDescribeConnectionsOnInterconnect = "OvertureService.DescribeConnectionsOnInterconnect"
}
export declare class DescribeConnectionsOnInterconnectRequest extends SpeakeasyBase {
    describeConnectionsOnInterconnectRequest: shared.DescribeConnectionsOnInterconnectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionsOnInterconnectXAmzTargetEnum;
}
export declare class DescribeConnectionsOnInterconnectResponse extends SpeakeasyBase {
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
