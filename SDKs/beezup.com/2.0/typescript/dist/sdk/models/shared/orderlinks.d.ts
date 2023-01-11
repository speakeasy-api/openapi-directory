import { SpeakeasyBase } from "../../../internal/utils";
import { LinksClearMerchantOrderInfoLink } from "./linksclearmerchantorderinfolink";
import { LinksHarvestOrderLink } from "./linksharvestorderlink";
import { LinksGetOrderHistoryLink } from "./linksgetorderhistorylink";
import { LinksGetOrderLink } from "./linksgetorderlink";
import { LinksSetMerchantOrderInfoLink } from "./linkssetmerchantorderinfolink";
export declare class OrderLinks extends SpeakeasyBase {
    clearMerchantInfo: LinksClearMerchantOrderInfoLink;
    harvest: LinksHarvestOrderLink;
    history: LinksGetOrderHistoryLink;
    self: LinksGetOrderLink;
    setMerchantInfo: LinksSetMerchantOrderInfoLink;
}
