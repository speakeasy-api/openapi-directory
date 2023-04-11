import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Apply filters
 */
export declare class OpportunitiesFilter extends SpeakeasyBase {
    /**
     * Company ID to filter on
     */
    companyId?: string;
    /**
     * Monetary amount to filter on
     */
    monetaryAmount?: number;
    /**
     * Status to filter on
     */
    status?: string;
    /**
     * Title of the opportunity to filter on
     */
    title?: string;
    /**
     * Win probability to filter on
     */
    winProbability?: number;
}
