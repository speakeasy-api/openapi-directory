import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for SetLoadBalancerPoliciesForBackendServer.
 */
export declare class SetLoadBalancerPoliciesForBackendServerInput extends SpeakeasyBase {
    instancePort: number;
    loadBalancerName: string;
    policyNames: string[];
}
