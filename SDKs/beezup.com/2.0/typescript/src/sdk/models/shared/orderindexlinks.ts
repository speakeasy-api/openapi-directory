import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetAutomaticTransitionsLink } from "./linksgetautomatictransitionslink";
import { LinksClearMerchantOrderInfoListLink } from "./linksclearmerchantorderinfolistlink";
import { LinksExportOrdersLink } from "./linksexportorderslink";
import { LinksGetOrderExportationsLink } from "./linksgetorderexportationslink";
import { LinksHarvestAllLink } from "./linksharvestalllink";
import { LinksGetOrderListLightLink } from "./linksgetorderlistlightlink";
import { LinksGetOrderListFullLink } from "./linksgetorderlistfulllink";
import { LinksGetOrderIndexLink } from "./linksgetorderindexlink";
import { LinksSetMerchantOrderInfoListLink } from "./linkssetmerchantorderinfolistlink";
import { LinksGetMarketplaceAccountsSynchronizationLink } from "./linksgetmarketplaceaccountssynchronizationlink";



// OrderIndexLinks
/** 
 * Gives you all entry point operations you can do on this API
**/
export class OrderIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoTransitions" })
  autoTransitions: LinksGetAutomaticTransitionsLink;

  @SpeakeasyMetadata({ data: "json, name=clearMerchantInfos" })
  clearMerchantInfos: LinksClearMerchantOrderInfoListLink;

  @SpeakeasyMetadata({ data: "json, name=export" })
  export: LinksExportOrdersLink;

  @SpeakeasyMetadata({ data: "json, name=exportations" })
  exportations?: LinksGetOrderExportationsLink;

  @SpeakeasyMetadata({ data: "json, name=harvest" })
  harvest: LinksHarvestAllLink;

  @SpeakeasyMetadata({ data: "json, name=lightOrders" })
  lightOrders: LinksGetOrderListLightLink;

  @SpeakeasyMetadata({ data: "json, name=orders" })
  orders: LinksGetOrderListFullLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksGetOrderIndexLink;

  @SpeakeasyMetadata({ data: "json, name=setMerchantInfos" })
  setMerchantInfos: LinksSetMerchantOrderInfoListLink;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LinksGetMarketplaceAccountsSynchronizationLink;
}
