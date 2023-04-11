import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
import { Parameter } from "./parameter";
export declare class StartPipelineExecutionRequest extends SpeakeasyBase {
    clientRequestToken: string;
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineExecutionDescription?: string;
    pipelineExecutionDisplayName?: string;
    pipelineName: string;
    pipelineParameters?: Parameter[];
}
