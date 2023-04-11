import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
export declare class UpdatePipelineExecutionRequest extends SpeakeasyBase {
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineExecutionArn: string;
    pipelineExecutionDescription?: string;
    pipelineExecutionDisplayName?: string;
}
