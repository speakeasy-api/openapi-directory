import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportByDayAllChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickCount" })
  clickCount: number;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost: number;

  @SpeakeasyMetadata({ data: "json, name=margin" })
  margin: number;

  @SpeakeasyMetadata({ data: "json, name=orderCount" })
  orderCount: number;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicator" })
  performanceIndicator: number;

  @SpeakeasyMetadata({ data: "json, name=roi" })
  roi: number;

  @SpeakeasyMetadata({ data: "json, name=soldProductCount" })
  soldProductCount: number;

  @SpeakeasyMetadata({ data: "json, name=totalSales" })
  totalSales: number;
}
