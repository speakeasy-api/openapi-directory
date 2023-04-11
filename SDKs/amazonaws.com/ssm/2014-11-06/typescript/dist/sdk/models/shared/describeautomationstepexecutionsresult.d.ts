import { SpeakeasyBase } from "../../../internal/utils";
import { StepExecution } from "./stepexecution";
/**
 * Success
 */
export declare class DescribeAutomationStepExecutionsResult extends SpeakeasyBase {
    nextToken?: string;
    stepExecutions?: StepExecution[];
}
