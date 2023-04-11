import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
import { PipelineDefinitionS3Location } from "./pipelinedefinitions3location";
import { Tag } from "./tag";
export declare class CreatePipelineRequest extends SpeakeasyBase {
    clientRequestToken: string;
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineDefinition?: string;
    pipelineDefinitionS3Location?: PipelineDefinitionS3Location;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName: string;
    roleArn: string;
    tags?: Tag[];
}
