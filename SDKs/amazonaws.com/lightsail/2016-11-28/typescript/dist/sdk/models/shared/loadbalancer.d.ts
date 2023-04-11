import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthSummary } from "./instancehealthsummary";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { LoadBalancerProtocolEnum } from "./loadbalancerprotocolenum";
import { LoadBalancerStateEnum } from "./loadbalancerstateenum";
import { LoadBalancerTlsCertificateSummary } from "./loadbalancertlscertificatesummary";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes a load balancer.
 */
export declare class LoadBalancer extends SpeakeasyBase {
    arn?: string;
    configurationOptions?: Record<string, string>;
    createdAt?: Date;
    dnsName?: string;
    healthCheckPath?: string;
    httpsRedirectionEnabled?: boolean;
    instanceHealthSummary?: InstanceHealthSummary[];
    instancePort?: number;
    ipAddressType?: IpAddressTypeEnum;
    location?: ResourceLocation;
    name?: string;
    protocol?: LoadBalancerProtocolEnum;
    publicPorts?: number[];
    resourceType?: ResourceTypeEnum;
    state?: LoadBalancerStateEnum;
    supportCode?: string;
    tags?: Tag[];
    tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];
    tlsPolicyName?: string;
}
