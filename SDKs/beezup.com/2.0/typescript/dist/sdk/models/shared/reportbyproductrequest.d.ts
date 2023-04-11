import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsProductColumnFilters } from "./analyticsproductcolumnfilters";
import { BeezUPCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { OrderByDirectionEnum } from "./orderbydirectionenum";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";
import { ProductStateFilterEnum } from "./productstatefilterenum";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
/**
 * Contains common filter parameters
 */
export declare class ReportByProductRequest extends SpeakeasyBase {
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
    /**
     * Indicate on which indicator or value you want to make your formula
     */
    orderBy?: PerformanceIndicatorTypeEnum;
    /**
     * Indicate which direction to order results by
     */
    orderByDirection?: OrderByDirectionEnum;
    /**
     * Indicates the page number
     */
    pageNumber?: number;
    /**
     * Indicate the item count per page
     */
    pageSize?: number;
    performanceIndicatorFilters?: PerformanceIndicatorFilter[];
    /**
     * Indicates the period type we want use for the report filter
     */
    periodType: ReportFilterPeriodTypeEnum;
    productColumnsToDisplay?: string[];
    /**
     * You can filter on the product state.
     */
    productState: ProductStateFilterEnum;
}
