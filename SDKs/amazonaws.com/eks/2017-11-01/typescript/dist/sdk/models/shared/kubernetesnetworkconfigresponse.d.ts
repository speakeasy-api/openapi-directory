import { SpeakeasyBase } from "../../../internal/utils";
import { IpFamilyEnum } from "./ipfamilyenum";
/**
 * The Kubernetes network configuration for the cluster. The response contains a value for <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both.
 */
export declare class KubernetesNetworkConfigResponse extends SpeakeasyBase {
    ipFamily?: IpFamilyEnum;
    serviceIpv4Cidr?: string;
    serviceIpv6Cidr?: string;
}
