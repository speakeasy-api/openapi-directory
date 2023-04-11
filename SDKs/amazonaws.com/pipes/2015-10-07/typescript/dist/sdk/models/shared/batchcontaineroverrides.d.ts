import { SpeakeasyBase } from "../../../internal/utils";
import { BatchEnvironmentVariable } from "./batchenvironmentvariable";
import { BatchResourceRequirement } from "./batchresourcerequirement";
/**
 * The overrides that are sent to a container.
 */
export declare class BatchContainerOverrides extends SpeakeasyBase {
    command?: string[];
    environment?: BatchEnvironmentVariable[];
    instanceType?: string;
    resourceRequirements?: BatchResourceRequirement[];
}
