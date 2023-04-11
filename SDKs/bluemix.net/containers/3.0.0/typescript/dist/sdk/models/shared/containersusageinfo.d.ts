import { SpeakeasyBase } from "../../../internal/utils";
import { ContainersUsageInfoAvailableSizes } from "./containersusageinfoavailablesizes";
export declare class ContainersUsageInfoLimits extends SpeakeasyBase {
    /**
     * The number of containers that can be created in the space. If -1 is returned, then an unlimited number of containers can be created. The number however is counted towards and limited by the container memory.
     */
    containers?: number;
    /**
     * The number of public IP addresses that can be allocated to the space.
     */
    floatingIps?: number;
    /**
     * The amount of container memory that can be used in the space in megabyte.
     */
    memoryMB?: number;
    /**
     * The number of virtual CPUs that are assigned to the space.
     */
    vcpu?: number;
}
export declare class ContainersUsageInfoUsage extends SpeakeasyBase {
    /**
     * The number of containers that were created in the space. All containers that count towards the quota limit are listed independent on their current state.
     */
    containers?: number;
    /**
     * The number of public IP addresses that are allocated to the space.
     */
    floatingIps?: number;
    /**
     * The number of public IP addresses that are bound to a container in the space.
     */
    floatingIpsBound?: number;
    /**
     * The number of private images that were added to the private Bluemix registry.
     */
    images?: number;
    /**
     * The amount of container memory that is already used by the containers that were created in the space in megabyte.
     */
    memoryMB?: number;
    /**
     * The number of containers that are currently in a running state.
     */
    running?: number;
    /**
     * The number of virtual CPUs that are allocated to the space.
     */
    vcpu?: number;
}
/**
 * OK. A list of available container sizes as well as the quota limit and usage for a space is returned.
 */
export declare class ContainersUsageInfo extends SpeakeasyBase {
    availableSizes?: ContainersUsageInfoAvailableSizes[];
    /**
     * The IBM Containers machine where the space is located
     */
    environment?: string;
    limits?: ContainersUsageInfoLimits;
    usage?: ContainersUsageInfoUsage;
}
