import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportAdvancedFilters } from "./reportadvancedfilters";



export class ReportByDayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advancedFilters" })
  advancedFilters?: ReportAdvancedFilters;

  @SpeakeasyMetadata({ data: "json, name=beginPeriodUtcDate" })
  beginPeriodUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=catalogCategoryId" })
  catalogCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=channelIds" })
  channelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=endPeriodUtcDate" })
  endPeriodUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
