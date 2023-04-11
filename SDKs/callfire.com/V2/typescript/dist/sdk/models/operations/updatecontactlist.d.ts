import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContactListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateContactListRequest extends SpeakeasyBase {
    /**
     * A request object
     */
    updateContactListRequest?: shared.UpdateContactListRequest;
    /**
     * An id of contact list to update
     */
    id: number;
}
export declare class UpdateContactListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
