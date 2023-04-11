import { SpeakeasyBase } from "../../../internal/utils";
import { LinksClearMerchantOrderInfoListLink } from "./linksclearmerchantorderinfolistlink";
import { LinksExportOrdersLink } from "./linksexportorderslink";
import { LinksGetMarketplaceAccountsSynchronizationLink } from "./linksgetmarketplaceaccountssynchronizationlink";
import { LinksGetOrderListLightLink } from "./linksgetorderlistlightlink";
import { LinksHarvestAllLink } from "./linksharvestalllink";
import { LinksSetMerchantOrderInfoListLink } from "./linkssetmerchantorderinfolistlink";
/**
 * The list of actions you can do from the order list response
 */
export declare class OrderListLightLinks extends SpeakeasyBase {
    clearMerchantInfos: LinksClearMerchantOrderInfoListLink;
    export: LinksExportOrdersLink;
    harvest: LinksHarvestAllLink;
    self: LinksGetOrderListLightLink;
    setMerchantInfos: LinksSetMerchantOrderInfoListLink;
    status: LinksGetMarketplaceAccountsSynchronizationLink;
}
