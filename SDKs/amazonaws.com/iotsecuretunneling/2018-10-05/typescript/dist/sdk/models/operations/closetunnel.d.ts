import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CloseTunnelXAmzTargetEnum {
    IoTSecuredTunnelingCloseTunnel = "IoTSecuredTunneling.CloseTunnel"
}
export declare class CloseTunnelRequest extends SpeakeasyBase {
    closeTunnelRequest: shared.CloseTunnelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloseTunnelXAmzTargetEnum;
}
export declare class CloseTunnelResponse extends SpeakeasyBase {
    /**
     * Success
     */
    closeTunnelResponse?: Record<string, any>;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
