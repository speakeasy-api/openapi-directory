import { SpeakeasyBase } from "../../../internal/utils";
import { EvidenceInsights } from "./evidenceinsights";
/**
 * <p>A summary of the latest analytics data for a specific control domain.</p> <p>Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>
 */
export declare class ControlDomainInsights extends SpeakeasyBase {
    controlsCountByNoncompliantEvidence?: number;
    evidenceInsights?: EvidenceInsights;
    id?: string;
    lastUpdated?: Date;
    name?: string;
    totalControlsCount?: number;
}
