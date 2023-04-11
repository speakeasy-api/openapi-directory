import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTunnelXAmzTargetEnum {
    IoTSecuredTunnelingDescribeTunnel = "IoTSecuredTunneling.DescribeTunnel"
}
export declare class DescribeTunnelRequest extends SpeakeasyBase {
    describeTunnelRequest: shared.DescribeTunnelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTunnelXAmzTargetEnum;
}
export declare class DescribeTunnelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTunnelResponse?: shared.DescribeTunnelResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
