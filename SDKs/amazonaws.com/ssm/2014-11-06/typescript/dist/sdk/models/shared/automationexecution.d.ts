import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { AutomationSubtypeEnum } from "./automationsubtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ProgressCounters } from "./progresscounters";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { StepExecution } from "./stepexecution";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
/**
 * Detailed information about the current state of an individual Automation execution.
 */
export declare class AutomationExecution extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    associationId?: string;
    automationExecutionId?: string;
    automationExecutionStatus?: AutomationExecutionStatusEnum;
    automationSubtype?: AutomationSubtypeEnum;
    changeRequestName?: string;
    currentAction?: string;
    currentStepName?: string;
    documentName?: string;
    documentVersion?: string;
    executedBy?: string;
    executionEndTime?: Date;
    executionStartTime?: Date;
    failureMessage?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    mode?: ExecutionModeEnum;
    opsItemId?: string;
    outputs?: Record<string, string[]>;
    parameters?: Record<string, string[]>;
    parentAutomationExecutionId?: string;
    progressCounters?: ProgressCounters;
    resolvedTargets?: ResolvedTargets;
    runbooks?: Runbook[];
    scheduledTime?: Date;
    stepExecutions?: StepExecution[];
    stepExecutionsTruncated?: boolean;
    target?: string;
    targetLocations?: TargetLocation[];
    targetMaps?: Record<string, string[]>[];
    targetParameterName?: string;
    targets?: Target[];
    triggeredAlarms?: AlarmStateInformation[];
}
