import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContactListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateContactListRequest extends SpeakeasyBase {
    /**
     * A request object
     */
    createContactListRequest?: shared.CreateContactListRequest;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
}
export declare class CreateContactListResponse extends SpeakeasyBase {
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
