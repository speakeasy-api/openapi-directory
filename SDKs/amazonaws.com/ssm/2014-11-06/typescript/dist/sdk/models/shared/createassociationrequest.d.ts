import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { Tag } from "./tag";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
export declare class CreateAssociationRequest extends SpeakeasyBase {
    /**
     * The details for the CloudWatch alarm you want to apply to an automation or command.
     */
    alarmConfiguration?: AlarmConfiguration;
    applyOnlyAtCronInterval?: boolean;
    associationName?: string;
    automationTargetParameterName?: string;
    calendarNames?: string[];
    complianceSeverity?: AssociationComplianceSeverityEnum;
    documentVersion?: string;
    instanceId?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    name: string;
    outputLocation?: InstanceAssociationOutputLocation;
    parameters?: Record<string, string[]>;
    scheduleExpression?: string;
    scheduleOffset?: number;
    syncCompliance?: AssociationSyncComplianceEnum;
    tags?: Tag[];
    targetLocations?: TargetLocation[];
    targetMaps?: Record<string, string[]>[];
    targets?: Target[];
}
