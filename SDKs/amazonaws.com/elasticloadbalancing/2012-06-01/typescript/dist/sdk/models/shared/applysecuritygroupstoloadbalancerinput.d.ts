import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for ApplySecurityGroupsToLoadBalancer.
 */
export declare class ApplySecurityGroupsToLoadBalancerInput extends SpeakeasyBase {
    loadBalancerName: string;
    securityGroups: string[];
}
