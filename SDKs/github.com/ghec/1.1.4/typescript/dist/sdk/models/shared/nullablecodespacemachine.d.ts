import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
 */
export declare enum NullableCodespaceMachinePrebuildAvailabilityEnum {
    None = "none",
    Ready = "ready",
    InProgress = "in_progress"
}
/**
 * A description of the machine powering a codespace.
 */
export declare class NullableCodespaceMachine extends SpeakeasyBase {
    /**
     * How many cores are available to the codespace.
     */
    cpus: number;
    /**
     * The display name of the machine includes cores, memory, and storage.
     */
    displayName: string;
    /**
     * How much memory is available to the codespace.
     */
    memoryInBytes: number;
    /**
     * The name of the machine.
     */
    name: string;
    /**
     * The operating system of the machine.
     */
    operatingSystem: string;
    /**
     * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
     */
    prebuildAvailability: NullableCodespaceMachinePrebuildAvailabilityEnum;
    /**
     * How much storage is available to the codespace.
     */
    storageInBytes: number;
}
