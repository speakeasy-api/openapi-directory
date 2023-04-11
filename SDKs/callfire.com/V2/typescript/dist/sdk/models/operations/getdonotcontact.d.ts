import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDoNotContactSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetDoNotContactRequest extends SpeakeasyBase {
    /**
     * Number associated with Do Not Contact (DNC) entry.
     */
    number: string;
}
export declare class GetDoNotContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    doNotContact?: shared.DoNotContact;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
