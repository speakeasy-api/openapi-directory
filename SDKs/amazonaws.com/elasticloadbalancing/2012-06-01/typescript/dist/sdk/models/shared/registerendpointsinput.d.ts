import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Contains the parameters for RegisterInstancesWithLoadBalancer.
 */
export declare class RegisterEndPointsInput extends SpeakeasyBase {
    instances: Instance[];
    loadBalancerName: string;
}
