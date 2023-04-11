import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { CompliantSummary } from "./compliantsummary";
import { NonCompliantSummary } from "./noncompliantsummary";
/**
 * Compliance summary information for a specific resource.
 */
export declare class ResourceComplianceSummaryItem extends SpeakeasyBase {
    complianceType?: string;
    compliantSummary?: CompliantSummary;
    executionSummary?: ComplianceExecutionSummary;
    nonCompliantSummary?: NonCompliantSummary;
    overallSeverity?: ComplianceSeverityEnum;
    resourceId?: string;
    resourceType?: string;
    status?: ComplianceStatusEnum;
}
