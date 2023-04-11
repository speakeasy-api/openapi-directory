import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The health status of the instance. If the status of either the instance status check or the system status check is <code>impaired</code>, the health status of the instance is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.
 */
export declare enum DescribeSpotFleetInstancesResponseActiveInstancesInstanceHealthEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy"
}
/**
 * Describes a running instance in a Spot Fleet.
 */
export declare class DescribeSpotFleetInstancesResponseActiveInstances extends SpeakeasyBase {
    instanceHealth?: DescribeSpotFleetInstancesResponseActiveInstancesInstanceHealthEnum;
    instanceId?: string;
    instanceType?: string;
    spotInstanceRequestId?: string;
}
/**
 * Contains the output of DescribeSpotFleetInstances.
 */
export declare class DescribeSpotFleetInstancesResponse extends SpeakeasyBase {
    activeInstances?: DescribeSpotFleetInstancesResponseActiveInstances[];
    nextToken?: string;
    spotFleetRequestId?: string;
}
