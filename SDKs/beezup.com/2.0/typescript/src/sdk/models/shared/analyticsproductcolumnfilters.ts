import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsProductColumnFilter } from "./analyticsproductcolumnfilter";



export class AnalyticsProductColumnFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAnalyticsProductColumnFilters", elemType: AnalyticsProductColumnFilter })
  additionalAnalyticsProductColumnFilters?: Record<string, AnalyticsProductColumnFilter>;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
