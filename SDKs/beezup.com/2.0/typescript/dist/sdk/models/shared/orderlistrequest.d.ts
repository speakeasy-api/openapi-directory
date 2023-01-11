import { SpeakeasyBase } from "../../../internal/utils";
import { DateSearchTypeEnum } from "./datesearchtypeenum";
export declare class OrderListRequest extends SpeakeasyBase {
    accountIds?: number[];
    beezUPOrderStatuses?: string[];
    beginPeriodUtcDate: Date;
    dateSearchType?: DateSearchTypeEnum;
    endPeriodUtcDate: Date;
    invoiceAvailabilityType?: string;
    marketplaceBusinessCodes?: string[];
    marketplaceOrderIds?: string[];
    marketplaceTechnicalCodes?: string[];
    orderMerchantInfoSynchronizationStatus?: string;
    orderBuyerName?: string;
    orderMerchantOrderIds?: string[];
    pageNumber: number;
    pageSize: number;
    storeIds?: string[];
}
