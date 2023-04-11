import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionState } from "./jobexecutionstate";
/**
 * Success
 */
export declare class UpdateJobExecutionResponse extends SpeakeasyBase {
    executionState?: JobExecutionState;
    jobDocument?: string;
}
