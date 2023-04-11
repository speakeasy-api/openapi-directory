import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DetachLoadBalancerFromSubnets.
 */
export declare class DetachLoadBalancerFromSubnetsInput extends SpeakeasyBase {
    loadBalancerName: string;
    subnets: string[];
}
