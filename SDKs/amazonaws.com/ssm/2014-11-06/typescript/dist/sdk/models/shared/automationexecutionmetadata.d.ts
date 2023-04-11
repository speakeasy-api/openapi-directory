import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { AutomationSubtypeEnum } from "./automationsubtypeenum";
import { AutomationTypeEnum } from "./automationtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { Target } from "./target";
/**
 * Details about a specific Automation execution.
 */
export declare class AutomationExecutionMetadata extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    associationId?: string;
    automationExecutionId?: string;
    automationExecutionStatus?: AutomationExecutionStatusEnum;
    automationSubtype?: AutomationSubtypeEnum;
    automationType?: AutomationTypeEnum;
    changeRequestName?: string;
    currentAction?: string;
    currentStepName?: string;
    documentName?: string;
    documentVersion?: string;
    executedBy?: string;
    executionEndTime?: Date;
    executionStartTime?: Date;
    failureMessage?: string;
    logFile?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    mode?: ExecutionModeEnum;
    opsItemId?: string;
    outputs?: Record<string, string[]>;
    parentAutomationExecutionId?: string;
    resolvedTargets?: ResolvedTargets;
    runbooks?: Runbook[];
    scheduledTime?: Date;
    target?: string;
    targetMaps?: Record<string, string[]>[];
    targetParameterName?: string;
    targets?: Target[];
    triggeredAlarms?: AlarmStateInformation[];
}
