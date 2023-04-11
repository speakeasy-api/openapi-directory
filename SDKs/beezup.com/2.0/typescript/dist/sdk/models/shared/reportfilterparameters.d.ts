import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsProductColumnFilters } from "./analyticsproductcolumnfilters";
import { BeezUPCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { ProductStateFilterEnum } from "./productstatefilterenum";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * Contains common filter parameters
 */
export declare class ReportFilterParameters extends SpeakeasyBase {
    advancedFilters: ReportAdvancedFilters;
    analyticsProductColumnFilters?: AnalyticsProductColumnFilters;
    /**
     * The begin date period you want to get the report. It's required only in case of custom period type !
     */
    beginPeriodUtcDate: Date;
    categoryFilter?: BeezUPCommonCatalogCategoryFilter;
    /**
     * The channel identifier
     */
    channelId?: string;
    /**
     * The end date period you want to get the report. It's required only in case of custom period type !
     */
    endPeriodUtcDate: Date;
    performanceIndicatorFilters?: PerformanceIndicatorFilter[];
    /**
     * Indicates the period type we want use for the report filter
     */
    periodType: ReportFilterPeriodTypeEnum;
    productColumnsToDisplay?: string[];
    /**
     * You can filter on the product state.
     */
    productState?: ProductStateFilterEnum;
    /**
     * The report type
     */
    reportType: ReportTypeEnum;
}
