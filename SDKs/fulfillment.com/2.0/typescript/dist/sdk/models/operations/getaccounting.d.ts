import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountingSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare enum GetAccountingHydrateEnum {
    Items = "items"
}
export declare class GetAccountingRequest extends SpeakeasyBase {
    /**
     * Orders invoice date. Date-time in ISO 8601 format for selecting orders after, or at, the specified time
     */
    fromDate: string;
    /**
     * Adds additional information to the response, uses a CSV format for multiple values.
     */
    hydrate: GetAccountingHydrateEnum[];
    /**
     * The numbers of items to return
     */
    limit?: number;
    /**
     * A CSV of FDC order id, '123' or '1,2,3'
     */
    orderIds?: number[];
    /**
     * A multiplier of the number of items (limit parameter) to skip before returning results
     */
    page?: number;
    /**
     * Orders invoice date. Date-time in ISO 8601 format for selecting orders before, or at, the specified time
     */
    toDate: string;
    /**
     * A CSV of warehouse id, '123' or '1,2,3'
     */
    warehouseIds?: number[];
}
export declare class GetAccountingAccountingArrayV2AccountingV2Fees extends SpeakeasyBase {
    box?: number;
    envelope?: number;
    fulfillment?: number;
    insert?: number;
    kitting?: number;
    picking?: number;
    postage?: number;
    print?: number;
    total?: number;
}
export declare class GetAccountingAccountingArrayV2AccountingV2Items extends SpeakeasyBase {
    id?: number;
    name?: string;
    quantity?: number;
    wmsItemId?: string;
}
export declare class GetAccountingAccountingArrayV2AccountingV2Merchant extends SpeakeasyBase {
    id?: number;
    /**
     * Name of the merchant
     */
    name?: string;
}
export declare class GetAccountingAccountingArrayV2AccountingV2Order extends SpeakeasyBase {
    /**
     * FDC order id
     */
    id?: number;
    /**
     * Date of the order when it was recorded by accounting.
     */
    invoiceDate?: Date;
    /**
     * Merchant order id
     */
    merchantOrderId?: number;
    /**
     * Date of the order when it was initially received.
     */
    recordedDate?: Date;
}
export declare class GetAccountingAccountingArrayV2AccountingV2Warehouse extends SpeakeasyBase {
    id?: number;
    /**
     * Name of the merchant
     */
    shortName?: string;
}
export declare class GetAccountingAccountingArrayV2AccountingV2 extends SpeakeasyBase {
    fees?: GetAccountingAccountingArrayV2AccountingV2Fees;
    /**
     * Total number of items accounted for
     */
    itemCount?: number;
    items?: GetAccountingAccountingArrayV2AccountingV2Items[];
    merchant?: GetAccountingAccountingArrayV2AccountingV2Merchant;
    order?: GetAccountingAccountingArrayV2AccountingV2Order;
    warehouse?: GetAccountingAccountingArrayV2AccountingV2Warehouse;
}
export declare class GetAccountingAccountingArrayV2MetaPaginationV2 extends SpeakeasyBase {
    /**
     * Count of records returned in response, this will be equal to or less then the limit parameter
     */
    count?: number;
    /**
     * Current page of the response, this will match the page parameter
     */
    currentPage?: number;
    /**
     * Total number of records available to request
     */
    total?: number;
    /**
     * Total number of pages available to request
     */
    totalPages?: number;
}
export declare class GetAccountingAccountingArrayV2Meta extends SpeakeasyBase {
    pagination?: GetAccountingAccountingArrayV2MetaPaginationV2;
}
/**
 * Accounting
 */
export declare class GetAccountingAccountingArrayV2 extends SpeakeasyBase {
    data?: GetAccountingAccountingArrayV2AccountingV2[];
    meta?: GetAccountingAccountingArrayV2Meta;
}
export declare class GetAccountingResponse extends SpeakeasyBase {
    /**
     * Accounting
     */
    accountingArrayV2?: GetAccountingAccountingArrayV2;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
