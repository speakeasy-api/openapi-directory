import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AllocateConnectionOnInterconnectXAmzTargetEnum {
    OvertureServiceAllocateConnectionOnInterconnect = "OvertureService.AllocateConnectionOnInterconnect"
}
export declare class AllocateConnectionOnInterconnectRequest extends SpeakeasyBase {
    allocateConnectionOnInterconnectRequest: shared.AllocateConnectionOnInterconnectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateConnectionOnInterconnectXAmzTargetEnum;
}
export declare class AllocateConnectionOnInterconnectResponse extends SpeakeasyBase {
    /**
     * Success
     */
    connection?: shared.Connection;
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
