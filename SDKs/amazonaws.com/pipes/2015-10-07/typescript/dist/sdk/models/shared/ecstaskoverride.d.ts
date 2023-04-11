import { SpeakeasyBase } from "../../../internal/utils";
import { EcsContainerOverride } from "./ecscontaineroverride";
import { EcsEphemeralStorage } from "./ecsephemeralstorage";
import { EcsInferenceAcceleratorOverride } from "./ecsinferenceacceleratoroverride";
/**
 * The overrides that are associated with a task.
 */
export declare class EcsTaskOverride extends SpeakeasyBase {
    containerOverrides?: EcsContainerOverride[];
    cpu?: string;
    ephemeralStorage?: EcsEphemeralStorage;
    executionRoleArn?: string;
    inferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];
    memory?: string;
    taskRoleArn?: string;
}
