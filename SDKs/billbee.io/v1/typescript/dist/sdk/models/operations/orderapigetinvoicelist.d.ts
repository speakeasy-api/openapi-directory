import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiGetInvoiceListRequest extends SpeakeasyBase {
    /**
     * If true the list of tags passed to the call are used to filter orders to not include these tags
     */
    excludeTags?: boolean;
    includePositions?: boolean;
    /**
     * Specifies the newest invoice date to include
     */
    maxInvoiceDate?: Date;
    maxPayDate?: Date;
    /**
     * Specifies the oldest invoice date to include
     */
    minInvoiceDate?: Date;
    minPayDate?: Date;
    /**
     * Specifies a list of state ids to include in the response
     */
    orderStateId?: number[];
    /**
     * Specifies the page to request
     */
    page?: number;
    /**
     * Specifies the pagesize. Defaults to 50, max value is 250
     */
    pageSize?: number;
    /**
     * Specifies a list of shop ids for which invoices should be included
     */
    shopId?: number[];
    tag?: string[];
}
export declare class OrderApiGetInvoiceListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiGetInvoiceList200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiGetInvoiceList200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
