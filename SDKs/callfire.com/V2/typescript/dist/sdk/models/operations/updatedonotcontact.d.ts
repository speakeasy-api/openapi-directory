import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDoNotContactSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDoNotContactRequest extends SpeakeasyBase {
    /**
     * DoNotContact object
     */
    doNotContactInput?: shared.DoNotContactInput;
    /**
     * ~
     */
    number: string;
}
export declare class UpdateDoNotContactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
