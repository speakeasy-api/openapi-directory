import { SpeakeasyBase } from "../../../internal/utils";
import { LinksClearMerchantOrderInfoListLink } from "./linksclearmerchantorderinfolistlink";
import { LinksExportOrdersLink } from "./linksexportorderslink";
import { LinksGetAutomaticTransitionsLink } from "./linksgetautomatictransitionslink";
import { LinksGetMarketplaceAccountsSynchronizationLink } from "./linksgetmarketplaceaccountssynchronizationlink";
import { LinksGetOrderExportationsLink } from "./linksgetorderexportationslink";
import { LinksGetOrderIndexLink } from "./linksgetorderindexlink";
import { LinksGetOrderListFullLink } from "./linksgetorderlistfulllink";
import { LinksGetOrderListLightLink } from "./linksgetorderlistlightlink";
import { LinksHarvestAllLink } from "./linksharvestalllink";
import { LinksSetMerchantOrderInfoListLink } from "./linkssetmerchantorderinfolistlink";
/**
 * Gives you all entry point operations you can do on this API
 */
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
