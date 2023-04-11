import { SpeakeasyBase } from "../../../internal/utils";
import { AuditFindingSeverityEnum } from "./auditfindingseverityenum";
import { NonCompliantResource } from "./noncompliantresource";
import { RelatedResource } from "./relatedresource";
/**
 * The findings (results) of the audit.
 */
export declare class AuditFinding extends SpeakeasyBase {
    checkName?: string;
    findingId?: string;
    findingTime?: Date;
    isSuppressed?: boolean;
    nonCompliantResource?: NonCompliantResource;
    reasonForNonCompliance?: string;
    reasonForNonComplianceCode?: string;
    relatedResources?: RelatedResource[];
    severity?: AuditFindingSeverityEnum;
    taskId?: string;
    taskStartTime?: Date;
}
