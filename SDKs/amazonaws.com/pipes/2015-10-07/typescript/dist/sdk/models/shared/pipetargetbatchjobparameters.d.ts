import { SpeakeasyBase } from "../../../internal/utils";
import { BatchArrayProperties } from "./batcharrayproperties";
import { BatchContainerOverrides } from "./batchcontaineroverrides";
import { BatchJobDependency } from "./batchjobdependency";
import { BatchRetryStrategy } from "./batchretrystrategy";
/**
 * The parameters for using an Batch job as a target.
 */
export declare class PipeTargetBatchJobParameters extends SpeakeasyBase {
    arrayProperties?: BatchArrayProperties;
    containerOverrides?: BatchContainerOverrides;
    dependsOn?: BatchJobDependency[];
    jobDefinition: string;
    jobName: string;
    parameters?: Record<string, string>;
    retryStrategy?: BatchRetryStrategy;
}
