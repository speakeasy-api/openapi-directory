import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribePipelineExecutionResponse extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    failureReason?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineArn?: string;
    pipelineExecutionArn?: string;
    pipelineExecutionDescription?: string;
    pipelineExecutionDisplayName?: string;
    pipelineExecutionStatus?: PipelineExecutionStatusEnum;
    /**
     * Specifies the names of the experiment and trial created by a pipeline.
     */
    pipelineExperimentConfig?: PipelineExperimentConfig;
}
