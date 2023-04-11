import { SpeakeasyBase } from "../../../internal/utils";
import { DateSearchTypeEnum } from "./datesearchtypeenum";
export declare class OrderListRequest extends SpeakeasyBase {
    /**
     * Account Id list
     */
    accountIds?: number[];
    beezUPOrderStatuses?: string[];
    /**
     * The begin period you want to make the search. \
     *
     * @remarks
     * The period MUST not be greater than 62 days.
     * The begin period MUST be lower than the end period.
     *
     */
    beginPeriodUtcDate: Date;
    /**
     * Indicates on which date you want to make the filter
     */
    dateSearchType?: DateSearchTypeEnum;
    /**
     * The end period of you search. \
     *
     * @remarks
     * The period MUST not be greater than 62 days. \
     * The end period MUST be greater than the begin period.
     * The end period MUST be lower to the current date.
     *
     */
    endPeriodUtcDate: Date;
    /**
     * Indicates on which invoice availability to filter
     */
    invoiceAvailabilityType?: string;
    marketplaceBusinessCodes?: string[];
    marketplaceOrderIds?: string[];
    marketplaceTechnicalCodes?: string[];
    /**
     * Indicates on which order merchant info synchronization status to filter
     */
    orderMerchantInfoSynchronizationStatus?: string;
    /**
     * Buyer full name
     */
    orderBuyerName?: string;
    /**
     * Merchant order id list
     */
    orderMerchantOrderIds?: string[];
    /**
     * Indicates the page number
     */
    pageNumber: number;
    /**
     * Indicate the order count per page
     */
    pageSize: number;
    /**
     * Store Id list
     */
    storeIds?: string[];
}
