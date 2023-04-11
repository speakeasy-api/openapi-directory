import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderNumbersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class OrderNumbersRequest extends SpeakeasyBase {
    /**
     * Request object contains a list of numbers to buy, you can filter the numbers by their region information: city, state, zipcode, etc
     */
    numberPurchaseRequest?: shared.NumberPurchaseRequest;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
}
export declare class OrderNumbersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    resourceId?: shared.ResourceId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
