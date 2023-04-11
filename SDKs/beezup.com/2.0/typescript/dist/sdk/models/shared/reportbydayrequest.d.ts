import { SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
export declare class ReportByDayRequest extends SpeakeasyBase {
    advancedFilters?: ReportAdvancedFilters;
    /**
     * The begin date of the period for the report
     */
    beginPeriodUtcDate: Date;
    /**
     * The catalog category identifier
     */
    catalogCategoryId?: string;
    /**
     * Indicate the channel identifier list
     */
    channelIds?: string[];
    /**
     * The end date of the period for the report
     */
    endPeriodUtcDate: Date;
    /**
     * The product identifier
     */
    productId?: string;
}
