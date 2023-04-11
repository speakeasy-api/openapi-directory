import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddContactListItemsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class AddContactListItemsRequest extends SpeakeasyBase {
    /**
     * A request object
     */
    addContactListContactsRequest?: shared.AddContactListContactsRequest;
    /**
     * An id of a contact list
     */
    id: number;
}
export declare class AddContactListItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
