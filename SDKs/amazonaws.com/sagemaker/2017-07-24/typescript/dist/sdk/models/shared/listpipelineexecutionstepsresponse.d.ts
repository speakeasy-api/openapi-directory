import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionStep } from "./pipelineexecutionstep";
/**
 * Success
 */
export declare class ListPipelineExecutionStepsResponse extends SpeakeasyBase {
    nextToken?: string;
    pipelineExecutionSteps?: PipelineExecutionStep[];
}
