import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersUsageInfoAvailableSizes extends SpeakeasyBase {
    /**
     * The amount of disk space on the compute host that is assigned to the container in gigabyte
     */
    disk?: number;
    /**
     * The ID of the container size.
     */
    id?: string;
    /**
     * The amount of container memory on the compute host that is assigned to the container in megabyte.
     */
    memoryMB?: number;
    /**
     * The IBM Containers name of the container size.
     */
    name?: string;
    /**
     * The number of virtual CPUs that can be assigned to the container.
     */
    vcpus?: number;
}
