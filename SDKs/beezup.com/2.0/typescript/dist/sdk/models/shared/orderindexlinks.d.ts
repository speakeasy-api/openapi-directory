import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Gives you all entry point operations you can do on this API
**/
export declare class OrderIndexLinks extends SpeakeasyBase {
    autoTransitions: LinksGetAutomaticTransitionsLink;
    clearMerchantInfos: LinksClearMerchantOrderInfoListLink;
    export: LinksExportOrdersLink;
    exportations?: LinksGetOrderExportationsLink;
    harvest: LinksHarvestAllLink;
    lightOrders: LinksGetOrderListLightLink;
    orders: LinksGetOrderListFullLink;
    self: LinksGetOrderIndexLink;
    setMerchantInfos: LinksSetMerchantOrderInfoListLink;
    status: LinksGetMarketplaceAccountsSynchronizationLink;
}
