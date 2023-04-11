import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetLoadBalancerListenerSSLCertificateActionEnum {
    SetLoadBalancerListenerSSLCertificate = "SetLoadBalancerListenerSSLCertificate"
}
export declare enum GETSetLoadBalancerListenerSSLCertificateVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETSetLoadBalancerListenerSSLCertificateRequest extends SpeakeasyBase {
    action: GETSetLoadBalancerListenerSSLCertificateActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The port that uses the specified SSL certificate.
     */
    loadBalancerPort: number;
    /**
     * The Amazon Resource Name (ARN) of the SSL certificate.
     */
    sslCertificateId: string;
    version: GETSetLoadBalancerListenerSSLCertificateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetLoadBalancerListenerSSLCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
