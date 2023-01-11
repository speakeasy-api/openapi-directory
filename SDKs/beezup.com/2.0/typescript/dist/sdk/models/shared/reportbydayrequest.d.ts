import { SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
export declare class ReportByDayRequest extends SpeakeasyBase {
    advancedFilters?: ReportAdvancedFilters;
    beginPeriodUtcDate: Date;
    catalogCategoryId?: string;
    channelIds?: string[];
    endPeriodUtcDate: Date;
    productId?: string;
}
