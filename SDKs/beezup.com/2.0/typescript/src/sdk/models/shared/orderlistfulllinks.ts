import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksClearMerchantOrderInfoListLink } from "./linksclearmerchantorderinfolistlink";
import { LinksExportOrdersLink } from "./linksexportorderslink";
import { LinksHarvestAllLink } from "./linksharvestalllink";
import { LinksGetOrderListFullLink } from "./linksgetorderlistfulllink";
import { LinksSetMerchantOrderInfoListLink } from "./linkssetmerchantorderinfolistlink";
import { LinksGetMarketplaceAccountsSynchronizationLink } from "./linksgetmarketplaceaccountssynchronizationlink";



// OrderListFullLinks
/** 
 * The list of actions you can do from the order list response
**/
export class OrderListFullLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearMerchantInfos" })
  clearMerchantInfos: LinksClearMerchantOrderInfoListLink;

  @SpeakeasyMetadata({ data: "json, name=export" })
  export: LinksExportOrdersLink;

  @SpeakeasyMetadata({ data: "json, name=harvest" })
  harvest: LinksHarvestAllLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetOrderListFullLink;

  @SpeakeasyMetadata({ data: "json, name=setMerchantInfos" })
  setMerchantInfos: LinksSetMerchantOrderInfoListLink;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LinksGetMarketplaceAccountsSynchronizationLink;
}
