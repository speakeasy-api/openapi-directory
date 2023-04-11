import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveContactListItemSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RemoveContactListItemRequest extends SpeakeasyBase {
    /**
     * An id of a contact
     */
    contactId: number;
    /**
     * An id of a contact list
     */
    id: number;
}
export declare class RemoveContactListItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
