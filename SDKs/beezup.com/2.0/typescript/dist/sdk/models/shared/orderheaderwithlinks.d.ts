import { SpeakeasyBase } from "../../../internal/utils";
import { OrderHeaderLinks } from "./orderheaderlinks";
/**
 * Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
**/
export declare class OrderHeaderWithLinks extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    beezUPOrderUrl?: string;
    etag: string;
    links: OrderHeaderLinks;
    marketplaceBusinessCode: string;
    marketplaceTechnicalCode: string;
    orderBuyerName?: string;
    orderCurrencyCode?: string;
    orderInvoiceNumber?: string;
    orderInvoiceUri?: string;
    orderLastModificationUtcDate: Date;
    orderMarketplaceLastModificationUtcDate: Date;
    orderMarketplaceOrderId: string;
    orderMerchantECommerceSoftwareName?: string;
    orderMerchantECommerceSoftwareVersion?: string;
    orderMerchantOrderId?: string;
    orderPurchaseUtcDate: Date;
    orderStatusBeezUPOrderStatus: string;
    orderStatusMarketplaceOrderStatus?: string;
    orderTotalPrice?: number;
    processing: boolean;
}
