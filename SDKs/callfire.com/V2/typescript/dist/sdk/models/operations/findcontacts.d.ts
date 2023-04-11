import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindContactsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindContactsRequest extends SpeakeasyBase {
    /**
     * Filters contacts by a particular contact list
     */
    contactListId?: number;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * A list of contact IDs. If the id parameter is included, the other query parameters are ignored.
     */
    id?: number[];
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Multiple contact numbers can be specified. If the number parameter is included, the other query parameters are ignored.
     */
    number?: string[];
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * Name of a contact property to search by
     */
    propertyName?: string;
    /**
     * Value of a contact property to search by
     */
    propertyValue?: string;
}
export declare class FindContactsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    contactPage?: shared.ContactPage;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
