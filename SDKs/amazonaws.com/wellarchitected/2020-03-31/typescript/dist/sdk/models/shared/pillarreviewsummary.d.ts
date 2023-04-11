import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A pillar review summary of a lens review.
 */
export declare class PillarReviewSummary extends SpeakeasyBase {
    /**
     * The notes associated with the workload.
     */
    notes?: string;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    pillarId?: string;
    /**
     * The name of the pillar.
     */
    pillarName?: string;
    /**
     * A map from risk names to the count of how questions have that rating.
     */
    riskCounts?: Record<string, number>;
}
