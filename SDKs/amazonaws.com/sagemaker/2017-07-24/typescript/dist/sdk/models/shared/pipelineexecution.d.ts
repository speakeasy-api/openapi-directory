import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
import { Parameter } from "./parameter";
import { PipelineExecutionStatusEnum } from "./pipelineexecutionstatusenum";
import { PipelineExperimentConfig } from "./pipelineexperimentconfig";
import { UserContext } from "./usercontext";
/**
 * An execution of a pipeline.
 */
export declare class PipelineExecution extends SpeakeasyBase {
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
    pipelineParameters?: Parameter[];
}
