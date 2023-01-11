import { SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { AnalyticsProductColumnFilters } from "./analyticsproductcolumnfilters";
import { BeezUpCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
import { ProductStateFilterEnum } from "./productstatefilterenum";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * Contains common filter parameters
**/
export declare class ReportFilterParameters extends SpeakeasyBase {
    advancedFilters: ReportAdvancedFilters;
    analyticsProductColumnFilters?: AnalyticsProductColumnFilters;
    beginPeriodUtcDate: Date;
    categoryFilter?: BeezUpCommonCatalogCategoryFilter;
    channelId?: string;
    endPeriodUtcDate: Date;
    performanceIndicatorFilters?: PerformanceIndicatorFilter[];
    periodType: ReportFilterPeriodTypeEnum;
    productColumnsToDisplay?: string[];
    productState?: ProductStateFilterEnum;
    reportType: ReportTypeEnum;
}
