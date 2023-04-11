import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindNumberLeasesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindNumberLeasesRequest extends SpeakeasyBase {
    /**
     * A city name
     */
    city?: string;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * A label name
     */
    labelName?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * A 4-7 digit prefix
     */
    prefix?: string;
    /**
     * A two-letter state code. Example: CA, IL, etc.
     */
    state?: string;
    /**
     * ~
     */
    tollFree?: boolean;
    /**
     * A five-digit Zipcode
     */
    zipcode?: string;
}
export declare class FindNumberLeasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    numberLeasePage?: shared.NumberLeasePage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
