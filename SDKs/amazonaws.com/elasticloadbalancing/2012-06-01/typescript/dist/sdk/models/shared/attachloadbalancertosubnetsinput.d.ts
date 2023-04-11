import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for AttachLoaBalancerToSubnets.
 */
export declare class AttachLoadBalancerToSubnetsInput extends SpeakeasyBase {
    loadBalancerName: string;
    subnets: string[];
}
