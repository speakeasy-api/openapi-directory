import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for SetLoadBalancePoliciesOfListener.
 */
export declare class SetLoadBalancerPoliciesOfListenerInput extends SpeakeasyBase {
    loadBalancerName: string;
    loadBalancerPort: number;
    policyNames: string[];
}
