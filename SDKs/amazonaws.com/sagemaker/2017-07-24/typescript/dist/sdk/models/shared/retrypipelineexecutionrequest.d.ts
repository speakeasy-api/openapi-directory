import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelismConfiguration } from "./parallelismconfiguration";
export declare class RetryPipelineExecutionRequest extends SpeakeasyBase {
    clientRequestToken: string;
    parallelismConfiguration?: ParallelismConfiguration;
    pipelineExecutionArn: string;
}
