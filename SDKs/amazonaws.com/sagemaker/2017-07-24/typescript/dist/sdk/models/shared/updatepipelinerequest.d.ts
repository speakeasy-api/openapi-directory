import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
import { PipelineDefinitionS3Location } from "./pipelinedefinitions3location";
export declare class UpdatePipelineRequest extends SpeakeasyBase {
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineDefinition?: string;
    pipelineDefinitionS3Location?: PipelineDefinitionS3Location;
    pipelineDescription?: string;
    pipelineDisplayName?: string;
    pipelineName: string;
    roleArn?: string;
}
