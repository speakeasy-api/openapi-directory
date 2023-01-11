import { SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { BeezUpCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";
import { OrderByDirectionEnum } from "./orderbydirectionenum";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
/**
 * Contains common filter parameters
**/
export declare class ReportByCategoryRequest extends SpeakeasyBase {
    advancedFilters: ReportAdvancedFilters;
    beginPeriodUtcDate?: Date;
    categoryFilter?: BeezUpCommonCatalogCategoryFilter;
    channelId?: string;
    endPeriodUtcDate?: Date;
    orderBy?: PerformanceIndicatorTypeEnum;
    orderByDirection?: OrderByDirectionEnum;
    pageNumber?: number;
    pageSize?: number;
    performanceIndicatorFilters?: PerformanceIndicatorFilter[];
    periodType: ReportFilterPeriodTypeEnum;
}
