import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the TLS security policies that are available for Lightsail load balancers.</p> <p>For more information about load balancer TLS security policies, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configure-load-balancer-tls-security-policy">Configuring TLS security policies on your Amazon Lightsail load balancers</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export declare class LoadBalancerTlsPolicy extends SpeakeasyBase {
    ciphers?: string[];
    description?: string;
    isDefault?: boolean;
    name?: string;
    protocols?: string[];
}
