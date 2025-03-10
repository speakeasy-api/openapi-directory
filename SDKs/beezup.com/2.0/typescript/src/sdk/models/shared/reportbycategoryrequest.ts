/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BeezUPCommonCatalogCategoryFilter } from "./beezupcommoncatalogcategoryfilter";
import { OrderByDirectionEnum } from "./orderbydirectionenum";
import { PerformanceIndicatorFilter } from "./performanceindicatorfilter";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";
import { ReportAdvancedFilters } from "./reportadvancedfilters";
import { ReportFilterPeriodTypeEnum } from "./reportfilterperiodtypeenum";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Contains common filter parameters
 */
export class ReportByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "advancedFilters" })
  @Type(() => ReportAdvancedFilters)
  advancedFilters: ReportAdvancedFilters;

  /**
   * The begin date period you want to get the report. It's required only in case of custom period type !
   */
  @SpeakeasyMetadata()
  @Expose({ name: "beginPeriodUtcDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  beginPeriodUtcDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "categoryFilter" })
  @Type(() => BeezUPCommonCatalogCategoryFilter)
  categoryFilter?: BeezUPCommonCatalogCategoryFilter;

  /**
   * The channel identifier
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channelId" })
  channelId?: string;

  /**
   * The end date period you want to get the report. It's required only in case of custom period type !
   */
  @SpeakeasyMetadata()
  @Expose({ name: "endPeriodUtcDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endPeriodUtcDate?: Date;

  /**
   * Indicate on which indicator or value you want to make your formula
   */
  @SpeakeasyMetadata()
  @Expose({ name: "orderBy" })
  orderBy?: PerformanceIndicatorTypeEnum;

  /**
   * Indicate which direction to order results by
   */
  @SpeakeasyMetadata()
  @Expose({ name: "orderByDirection" })
  orderByDirection?: OrderByDirectionEnum;

  /**
   * Indicates the page number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  /**
   * Indicate the item count per page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: PerformanceIndicatorFilter })
  @Expose({ name: "performanceIndicatorFilters" })
  @Type(() => PerformanceIndicatorFilter)
  performanceIndicatorFilters?: PerformanceIndicatorFilter[];

  /**
   * Indicates the period type we want use for the report filter
   */
  @SpeakeasyMetadata()
  @Expose({ name: "periodType" })
  periodType: ReportFilterPeriodTypeEnum;
}
