import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
 */
export declare enum OrderApiGetListArticleTitleSourceEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class OrderApiGetListRequest extends SpeakeasyBase {
    /**
     * The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
     */
    articleTitleSource?: OrderApiGetListArticleTitleSourceEnum;
    /**
     * If true the list of tags passed to the call are used to filter orders to not include these tags
     */
    excludeTags?: boolean;
    /**
     * Specifies the newest order date to include in the response
     */
    maxOrderDate?: Date;
    /**
     * Specifies the oldest order date to include in the response
     */
    minOrderDate?: Date;
    /**
     * If given, all delivered orders have an Id greater than or equal to the given minimumOrderId
     */
    minimumBillBeeOrderId?: number;
    /**
     * If given, the last modification has to be older or equal than the given date.
     */
    modifiedAtMax?: Date;
    /**
     * If given, the last modification has to be newer than the given date
     */
    modifiedAtMin?: Date;
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
    /**
     * Specifies a list of tags the order must have attached to be included in the response
     */
    tag?: string[];
}
export declare class OrderApiGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder?: shared.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
