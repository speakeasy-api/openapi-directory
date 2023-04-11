import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { AssociationOverview } from "./associationoverview";
import { AssociationStatus } from "./associationstatus";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
/**
 * Describes the parameters for a document.
 */
export declare class AssociationDescription extends SpeakeasyBase {
    /**
     * The details for the CloudWatch alarm you want to apply to an automation or command.
     */
    alarmConfiguration?: AlarmConfiguration;
    applyOnlyAtCronInterval?: boolean;
    associationId?: string;
    associationName?: string;
    associationVersion?: string;
    automationTargetParameterName?: string;
    calendarNames?: string[];
    complianceSeverity?: AssociationComplianceSeverityEnum;
    date?: Date;
    documentVersion?: string;
    instanceId?: string;
    lastExecutionDate?: Date;
    lastSuccessfulExecutionDate?: Date;
    lastUpdateAssociationDate?: Date;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    outputLocation?: InstanceAssociationOutputLocation;
    overview?: AssociationOverview;
    parameters?: Record<string, string[]>;
    scheduleExpression?: string;
    scheduleOffset?: number;
    status?: AssociationStatus;
    syncCompliance?: AssociationSyncComplianceEnum;
    targetLocations?: TargetLocation[];
    targetMaps?: Record<string, string[]>[];
    targets?: Target[];
    triggeredAlarms?: AlarmStateInformation[];
}
