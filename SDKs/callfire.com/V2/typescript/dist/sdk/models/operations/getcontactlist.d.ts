import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetContactListRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a contact list to return
     */
    id: number;
}
export declare class GetContactListResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    contactList?: shared.ContactList;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
