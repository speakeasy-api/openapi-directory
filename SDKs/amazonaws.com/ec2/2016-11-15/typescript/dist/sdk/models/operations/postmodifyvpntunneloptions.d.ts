import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpnTunnelOptionsActionEnum {
    ModifyVpnTunnelOptions = "ModifyVpnTunnelOptions"
}
export declare enum POSTModifyVpnTunnelOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpnTunnelOptionsRequest extends SpeakeasyBase {
    action: POSTModifyVpnTunnelOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpnTunnelOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpnTunnelOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
