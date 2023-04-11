import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveContactListItemsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class RemoveContactListItemsRequest extends SpeakeasyBase {
    /**
     * An id of a contact entity in the CallFire system
     */
    contactId?: number[];
    /**
     * A id of a contact list
     */
    id: number;
}
export declare class RemoveContactListItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
