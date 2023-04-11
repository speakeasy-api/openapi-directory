import { SpeakeasyBase } from "../../../internal/utils";
import { CacheHitResult } from "./cachehitresult";
import { PipelineExecutionStepMetadata } from "./pipelineexecutionstepmetadata";
import { StepStatusEnum } from "./stepstatusenum";
/**
 * An execution of a step in a pipeline.
 */
export declare class PipelineExecutionStep extends SpeakeasyBase {
    attemptCount?: number;
    cacheHitResult?: CacheHitResult;
    endTime?: Date;
    failureReason?: string;
    metadata?: PipelineExecutionStepMetadata;
    startTime?: Date;
    stepDescription?: string;
    stepDisplayName?: string;
    stepName?: string;
    stepStatus?: StepStatusEnum;
}
