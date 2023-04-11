import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetLoadBalancerListenerSSLCertificateActionEnum {
    SetLoadBalancerListenerSSLCertificate = "SetLoadBalancerListenerSSLCertificate"
}
export declare enum POSTSetLoadBalancerListenerSSLCertificateVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTSetLoadBalancerListenerSSLCertificateRequest extends SpeakeasyBase {
    action: POSTSetLoadBalancerListenerSSLCertificateActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetLoadBalancerListenerSSLCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetLoadBalancerListenerSSLCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
