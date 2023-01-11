import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { ReportByChannelLinks } from "./reportbychannellinks";



export class ReportByChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogProductCount" })
  catalogProductCount: number;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: BeezUpCommonChannelBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=clickCount" })
  clickCount: number;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost: number;

  @SpeakeasyMetadata({ data: "json, name=enabledProductCount" })
  enabledProductCount: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ReportByChannelLinks;

  @SpeakeasyMetadata({ data: "json, name=margin" })
  margin?: number;

  @SpeakeasyMetadata({ data: "json, name=orderCount" })
  orderCount: number;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicator" })
  performanceIndicator: number;

  @SpeakeasyMetadata({ data: "json, name=roi" })
  roi?: number;

  @SpeakeasyMetadata({ data: "json, name=soldProductCount" })
  soldProductCount: number;

  @SpeakeasyMetadata({ data: "json, name=totalSales" })
  totalSales: number;
}
