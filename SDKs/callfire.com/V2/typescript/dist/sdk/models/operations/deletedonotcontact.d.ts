import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDoNotContactSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDoNotContactRequest extends SpeakeasyBase {
    /**
     * Number associated with Do Not Contact (DNC) entry.
     */
    number: string;
}
export declare class DeleteDoNotContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
