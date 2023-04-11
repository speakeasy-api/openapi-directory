import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindOrdersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindOrdersRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Start of the find time interval, formatted in unix time milliseconds. Example: 1473781817000
     */
    intervalBegin?: number;
    /**
     * End of the find time interval, formatted in unix time milliseconds. Example: 1473781817000
     */
    intervalEnd?: number;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * Filter by order status, accepts multiple values in comma separated string, available values: [PROCESSING, FINISHED, PAYMENT_ERROR, VOID, WAIT_FOR_PAYMENT, PARTIALLY_ADJUSTED, ADJUSTED]
     */
    status?: string[];
}
export declare class FindOrdersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    pageNumberOrder?: shared.PageNumberOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
