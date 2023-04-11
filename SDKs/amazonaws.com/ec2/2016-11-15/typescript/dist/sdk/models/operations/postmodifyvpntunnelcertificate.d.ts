import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpnTunnelCertificateActionEnum {
    ModifyVpnTunnelCertificate = "ModifyVpnTunnelCertificate"
}
export declare enum POSTModifyVpnTunnelCertificateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpnTunnelCertificateRequest extends SpeakeasyBase {
    action: POSTModifyVpnTunnelCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpnTunnelCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpnTunnelCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
