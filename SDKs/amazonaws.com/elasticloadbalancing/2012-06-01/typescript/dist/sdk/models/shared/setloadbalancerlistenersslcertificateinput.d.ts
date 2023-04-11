import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for SetLoadBalancerListenerSSLCertificate.
 */
export declare class SetLoadBalancerListenerSSLCertificateInput extends SpeakeasyBase {
    loadBalancerName: string;
    loadBalancerPort: number;
    sslCertificateId: string;
}
