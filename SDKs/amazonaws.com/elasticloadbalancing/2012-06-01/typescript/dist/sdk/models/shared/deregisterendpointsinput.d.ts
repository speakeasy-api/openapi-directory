import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Contains the parameters for DeregisterInstancesFromLoadBalancer.
 */
export declare class DeregisterEndPointsInput extends SpeakeasyBase {
    instances: Instance[];
    loadBalancerName: string;
}
