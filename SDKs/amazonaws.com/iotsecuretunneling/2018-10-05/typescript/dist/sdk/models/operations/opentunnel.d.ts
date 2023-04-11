import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum OpenTunnelXAmzTargetEnum {
    IoTSecuredTunnelingOpenTunnel = "IoTSecuredTunneling.OpenTunnel"
}
export declare class OpenTunnelRequest extends SpeakeasyBase {
    openTunnelRequest: shared.OpenTunnelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: OpenTunnelXAmzTargetEnum;
}
export declare class OpenTunnelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    openTunnelResponse?: shared.OpenTunnelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
