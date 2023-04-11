import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
/**
 * Includes information about the specified association.
 */
export declare class AssociationExecution extends SpeakeasyBase {
    /**
     * The details for the CloudWatch alarm you want to apply to an automation or command.
     */
    alarmConfiguration?: AlarmConfiguration;
    associationId?: string;
    associationVersion?: string;
    createdTime?: Date;
    detailedStatus?: string;
    executionId?: string;
    lastExecutionDate?: Date;
    resourceCountByStatus?: string;
    status?: string;
    triggeredAlarms?: AlarmStateInformation[];
}
