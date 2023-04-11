import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DisableAvailabilityZonesForLoadBalancer.
 */
export declare class RemoveAvailabilityZonesInput extends SpeakeasyBase {
    availabilityZones: string[];
    loadBalancerName: string;
}
