import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the instances distribution.
 */
export declare class AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails extends SpeakeasyBase {
    onDemandAllocationStrategy?: string;
    onDemandBaseCapacity?: number;
    onDemandPercentageAboveBaseCapacity?: number;
    spotAllocationStrategy?: string;
    spotInstancePools?: number;
    spotMaxPrice?: string;
}
