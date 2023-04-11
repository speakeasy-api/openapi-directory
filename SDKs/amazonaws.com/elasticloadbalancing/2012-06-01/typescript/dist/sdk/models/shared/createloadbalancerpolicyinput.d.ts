import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttribute } from "./policyattribute";
/**
 * Contains the parameters for CreateLoadBalancerPolicy.
 */
export declare class CreateLoadBalancerPolicyInput extends SpeakeasyBase {
    loadBalancerName: string;
    policyAttributes?: PolicyAttribute[];
    policyName: string;
    policyTypeName: string;
}
