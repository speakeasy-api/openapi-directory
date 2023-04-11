import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. The creation of a single container with the specified attributes has been initiated.
 */
export declare class ContainerId extends SpeakeasyBase {
    /**
     * Unique ID representing a container.
     */
    id?: string;
    /**
     * The ID of the container size.
     */
    flavorId?: number;
    /**
     * The amount of container memory that has been assigned to the container. If the container memory was not specified in the API request, a container with 64 Megabyte container memory is created by default.
     */
    mem?: number;
    /**
     * Number of virtual CPUs that are assigned to the container.
     */
    vcpu?: number;
}
