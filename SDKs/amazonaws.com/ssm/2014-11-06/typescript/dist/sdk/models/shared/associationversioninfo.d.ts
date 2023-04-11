import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { Target } from "./target";
import { TargetLocation } from "./targetlocation";
/**
 * Information about the association version.
 */
export declare class AssociationVersionInfo extends SpeakeasyBase {
    applyOnlyAtCronInterval?: boolean;
    associationId?: string;
    associationName?: string;
    associationVersion?: string;
    calendarNames?: string[];
    complianceSeverity?: AssociationComplianceSeverityEnum;
    createdDate?: Date;
    documentVersion?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    outputLocation?: InstanceAssociationOutputLocation;
    parameters?: Record<string, string[]>;
    scheduleExpression?: string;
    scheduleOffset?: number;
    syncCompliance?: AssociationSyncComplianceEnum;
    targetLocations?: TargetLocation[];
    targetMaps?: Record<string, string[]>[];
    targets?: Target[];
}
