import { SpeakeasyBase } from "../../../internal/utils";
import { EvidenceInsights } from "./evidenceinsights";
/**
 * <p>A summary of the latest analytics data for a specific control. </p> <p>This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>
 */
export declare class ControlInsightsMetadataItem extends SpeakeasyBase {
    evidenceInsights?: EvidenceInsights;
    id?: string;
    lastUpdated?: Date;
    name?: string;
}
