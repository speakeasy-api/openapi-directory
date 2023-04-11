import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use this structure to specify the distribution of On-Demand Instances and Spot Instances and the allocation strategies used to fulfill On-Demand and Spot capacities for a mixed instances policy.
 */
export declare class InstancesDistribution extends SpeakeasyBase {
    onDemandAllocationStrategy?: string;
    onDemandBaseCapacity?: number;
    onDemandPercentageAboveBaseCapacity?: number;
    spotAllocationStrategy?: string;
    spotInstancePools?: number;
    spotMaxPrice?: string;
}
