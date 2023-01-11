import { SpeakeasyBase } from "../../../internal/utils";
import { LinksClearMerchantOrderInfoListLink } from "./linksclearmerchantorderinfolistlink";
import { LinksExportOrdersLink } from "./linksexportorderslink";
import { LinksHarvestAllLink } from "./linksharvestalllink";
import { LinksGetOrderListFullLink } from "./linksgetorderlistfulllink";
import { LinksSetMerchantOrderInfoListLink } from "./linkssetmerchantorderinfolistlink";
import { LinksGetMarketplaceAccountsSynchronizationLink } from "./linksgetmarketplaceaccountssynchronizationlink";
/**
 * The list of actions you can do from the order list response
**/
export declare class OrderListFullLinks extends SpeakeasyBase {
    clearMerchantInfos: LinksClearMerchantOrderInfoListLink;
    export: LinksExportOrdersLink;
    harvest: LinksHarvestAllLink;
    self: LinksGetOrderListFullLink;
    setMerchantInfos: LinksSetMerchantOrderInfoListLink;
    status: LinksGetMarketplaceAccountsSynchronizationLink;
}
