import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindNumbersLocalSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindNumbersLocalRequest extends SpeakeasyBase {
    /**
     * A city name
     */
    city?: string;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * A 4-7 digit prefix
     */
    prefix?: string;
    /**
     * A two-letter state code. Example: CA, IL, etc.
     */
    state?: string;
    /**
     * A five-digit Zipcode
     */
    zipcode?: string;
}
export declare class FindNumbersLocalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    numberList?: shared.NumberList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
