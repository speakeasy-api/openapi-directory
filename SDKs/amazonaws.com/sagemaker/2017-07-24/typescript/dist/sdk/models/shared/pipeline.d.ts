import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
import { PipelineStatusEnum } from "./pipelinestatusenum";
import { Tag } from "./tag";
import { UserContext } from "./usercontext";
/**
 * A SageMaker Model Building Pipeline instance.
 */
export declare class Pipeline extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lastRunTime?: Date;
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineArn?: string;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName?: string;
    pipelineStatus?: PipelineStatusEnum;
    roleArn?: string;
    tags?: Tag[];
}
