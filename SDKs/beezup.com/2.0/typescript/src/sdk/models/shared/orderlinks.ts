import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksClearMerchantOrderInfoLink } from "./linksclearmerchantorderinfolink";
import { LinksHarvestOrderLink } from "./linksharvestorderlink";
import { LinksGetOrderHistoryLink } from "./linksgetorderhistorylink";
import { LinksGetOrderLink } from "./linksgetorderlink";
import { LinksSetMerchantOrderInfoLink } from "./linkssetmerchantorderinfolink";



export class OrderLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearMerchantInfo" })
  clearMerchantInfo: LinksClearMerchantOrderInfoLink;

  @SpeakeasyMetadata({ data: "json, name=harvest" })
  harvest: LinksHarvestOrderLink;

  @SpeakeasyMetadata({ data: "json, name=history" })
  history: LinksGetOrderHistoryLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetOrderLink;

  @SpeakeasyMetadata({ data: "json, name=setMerchantInfo" })
  setMerchantInfo: LinksSetMerchantOrderInfoLink;
}
