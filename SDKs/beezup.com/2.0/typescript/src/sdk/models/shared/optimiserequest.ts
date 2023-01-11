import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { AnalyticsProductColumnFilters } from "./analyticsproductcolumnfilters";
import { BeezUpCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";
import { OrderByDirectionEnum } from "./orderbydirectionenum";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
import { ProductStateFilterEnum } from "./productstatefilterenum";
import { ReportTypeEnum } from "./reporttypeenum";



// OptimiseRequest
/** 
 * Contains common filter parameters
**/
export class OptimiseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advancedFilters" })
  advancedFilters: ReportAdvancedFilters;

  @SpeakeasyMetadata({ data: "json, name=analyticsProductColumnFilters" })
  analyticsProductColumnFilters?: AnalyticsProductColumnFilters;

  @SpeakeasyMetadata({ data: "json, name=beginPeriodUtcDate" })
  beginPeriodUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=categoryFilter" })
  categoryFilter?: BeezUpCommonCatalogCategoryFilter;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=endPeriodUtcDate" })
  endPeriodUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: PerformanceIndicatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=orderByDirection" })
  orderByDirection?: OrderByDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicatorFilters", elemType: PerformanceIndicatorFilter })
  performanceIndicatorFilters?: PerformanceIndicatorFilter[];

  @SpeakeasyMetadata({ data: "json, name=periodType" })
  periodType: ReportFilterPeriodTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=productColumnsToDisplay" })
  productColumnsToDisplay?: string[];

  @SpeakeasyMetadata({ data: "json, name=productState" })
  productState?: ProductStateFilterEnum;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType: ReportTypeEnum;
}
