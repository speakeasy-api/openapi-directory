import { SpeakeasyBase } from "../../../internal/utils";
import { StepConfig } from "./stepconfig";
import { StepExecutionStatusDetail } from "./stepexecutionstatusdetail";
/**
 * Combines the execution state and configuration of a step.
 */
export declare class StepDetail extends SpeakeasyBase {
    executionStatusDetail: StepExecutionStatusDetail;
    stepConfig: StepConfig;
}
