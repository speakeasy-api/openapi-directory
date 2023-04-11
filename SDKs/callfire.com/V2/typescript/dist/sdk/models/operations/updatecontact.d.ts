import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContactSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateContactRequest extends SpeakeasyBase {
    /**
     * A contact object
     */
    contact?: shared.Contact;
    /**
     * An id of a contact
     */
    id: number;
}
export declare class UpdateContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
