import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsPolicy } from "./loadbalancertlspolicy";
/**
 * Success
 */
export declare class GetLoadBalancerTlsPoliciesResult extends SpeakeasyBase {
    nextPageToken?: string;
    tlsPolicies?: LoadBalancerTlsPolicy[];
}
