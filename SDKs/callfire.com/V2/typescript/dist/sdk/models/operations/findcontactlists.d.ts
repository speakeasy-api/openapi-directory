import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindContactListsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindContactListsRequest extends SpeakeasyBase {
    /**
     * ~
     */
    contactCount?: number;
    /**
     * ~
     */
    exactMatch?: boolean;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * A name or a partial name of a contact list
     */
    name?: string;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * ~
     */
    orderBy?: string;
}
export declare class FindContactListsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    contactListPage?: shared.ContactListPage;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
