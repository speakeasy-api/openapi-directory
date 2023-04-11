import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The health status of the instance. If the status of either the instance status check or the system status check is <code>impaired</code>, the health status of the instance is <code>unhealthy</code>. Otherwise, the health status is <code>healthy</code>.
 */
export declare enum DescribeFleetInstancesResultActiveInstancesInstanceHealthEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy"
}
/**
 * Describes a running instance in a Spot Fleet.
 */
export declare class DescribeFleetInstancesResultActiveInstances extends SpeakeasyBase {
    instanceHealth?: DescribeFleetInstancesResultActiveInstancesInstanceHealthEnum;
    instanceId?: string;
    instanceType?: string;
    spotInstanceRequestId?: string;
}
/**
 * Success
 */
export declare class DescribeFleetInstancesResult extends SpeakeasyBase {
    activeInstances?: DescribeFleetInstancesResultActiveInstances[];
    fleetId?: string;
    nextToken?: string;
}
