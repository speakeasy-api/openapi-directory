import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByProductLinks } from "./reportbyproductlinks";
import { BeezUpCommonProductBasicInfo } from "./beezupcommonproductbasicinfo";



export class ReportByProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelCount" })
  channelCount: number;

  @SpeakeasyMetadata({ data: "json, name=clickCount" })
  clickCount: number;

  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost: number;

  @SpeakeasyMetadata({ data: "json, name=enabledOnChannelCount" })
  enabledOnChannelCount: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ReportByProductLinks;

  @SpeakeasyMetadata({ data: "json, name=margin" })
  margin?: number;

  @SpeakeasyMetadata({ data: "json, name=orderCount" })
  orderCount: number;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicator" })
  performanceIndicator: number;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: BeezUpCommonProductBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=roi" })
  roi?: number;

  @SpeakeasyMetadata({ data: "json, name=soldProductCount" })
  soldProductCount: number;

  @SpeakeasyMetadata({ data: "json, name=totalSales" })
  totalSales: number;
}
