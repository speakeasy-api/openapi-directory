import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteContactListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteContactListRequest extends SpeakeasyBase {
    /**
     * An id of the contact list to be deleted
     */
    id: number;
}
export declare class DeleteContactListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
