import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RotateTunnelAccessTokenXAmzTargetEnum {
    IoTSecuredTunnelingRotateTunnelAccessToken = "IoTSecuredTunneling.RotateTunnelAccessToken"
}
export declare class RotateTunnelAccessTokenRequest extends SpeakeasyBase {
    rotateTunnelAccessTokenRequest: shared.RotateTunnelAccessTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RotateTunnelAccessTokenXAmzTargetEnum;
}
export declare class RotateTunnelAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    rotateTunnelAccessTokenResponse?: shared.RotateTunnelAccessTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
