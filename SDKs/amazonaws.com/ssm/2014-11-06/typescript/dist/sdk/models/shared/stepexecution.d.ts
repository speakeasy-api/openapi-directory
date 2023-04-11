import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmStateInformation } from "./alarmstateinformation";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { FailureDetails } from "./failuredetails";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
/**
 * Detailed information about an the execution state of an Automation step.
 */
export declare class StepExecution extends SpeakeasyBase {
    action?: string;
    executionEndTime?: Date;
    executionStartTime?: Date;
    failureDetails?: FailureDetails;
    failureMessage?: string;
    inputs?: Record<string, string>;
    isCritical?: boolean;
    isEnd?: boolean;
    maxAttempts?: number;
    nextStep?: string;
    onFailure?: string;
    outputs?: Record<string, string[]>;
    overriddenParameters?: Record<string, string[]>;
    response?: string;
    responseCode?: string;
    stepExecutionId?: string;
    stepName?: string;
    stepStatus?: AutomationExecutionStatusEnum;
    targetLocation?: TargetLocation;
    targets?: Target[];
    timeoutSeconds?: number;
    triggeredAlarms?: AlarmStateInformation[];
    validNextSteps?: string[];
}
