import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindNumbersTollfreeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindNumbersTollfreeRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Filter toll free numbers by prefix, pattern must be 3 char long and should end with '*'. Examples: 8**, 85*, 87* (but 855 will fail because pattern must end with '*').
     */
    pattern?: string;
}
export declare class FindNumbersTollfreeResponse extends SpeakeasyBase {
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
