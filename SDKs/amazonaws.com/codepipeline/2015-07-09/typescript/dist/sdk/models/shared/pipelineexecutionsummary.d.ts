import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTrigger } from "./executiontrigger";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { SourceRevision } from "./sourcerevision";
import { StopExecutionTrigger } from "./stopexecutiontrigger";
/**
 * Summary information about a pipeline execution.
 */
export declare class PipelineExecutionSummary extends SpeakeasyBase {
    lastUpdateTime?: Date;
    pipelineExecutionId?: string;
    sourceRevisions?: SourceRevision[];
    startTime?: Date;
    status?: PipelineExecutionStatusEnum;
    stopTrigger?: StopExecutionTrigger;
    trigger?: ExecutionTrigger;
}
