import { SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { AnalyticsProductColumnFilters } from "./analyticsproductcolumnfilters";
import { BeezUpCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";
import { OrderByDirectionEnum } from "./orderbydirectionenum";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
import { ProductStateFilterEnum } from "./productstatefilterenum";
/**
 * Contains common filter parameters
**/
export declare class ReportByProductRequest extends SpeakeasyBase {
    advancedFilters: ReportAdvancedFilters;
    analyticsProductColumnFilters?: AnalyticsProductColumnFilters;
    beginPeriodUtcDate: Date;
    categoryFilter?: BeezUpCommonCatalogCategoryFilter;
    channelId?: string;
    endPeriodUtcDate: Date;
    orderBy?: PerformanceIndicatorTypeEnum;
    orderByDirection?: OrderByDirectionEnum;
    pageNumber?: number;
    pageSize?: number;
    performanceIndicatorFilters?: PerformanceIndicatorFilter[];
    periodType: ReportFilterPeriodTypeEnum;
    productColumnsToDisplay?: string[];
    productState: ProductStateFilterEnum;
}
