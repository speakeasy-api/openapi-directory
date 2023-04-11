import { SpeakeasyBase } from "../../../internal/utils";
import { EvidenceInsights } from "./evidenceinsights";
/**
 * <p>A summary of the latest analytics data for a specific control in a specific active assessment.</p> <p>Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence. </p>
 */
export declare class ControlInsightsMetadataByAssessmentItem extends SpeakeasyBase {
    controlSetName?: string;
    evidenceInsights?: EvidenceInsights;
    id?: string;
    lastUpdated?: Date;
    name?: string;
}
