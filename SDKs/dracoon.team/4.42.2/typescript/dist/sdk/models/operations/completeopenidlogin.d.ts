import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteOpenIdLoginRequest extends SpeakeasyBase {
    /**
     * Authorization code
     */
    code: string;
    /**
     * Identity token
     */
    idToken?: string;
    /**
     * Authentication state
     */
    state: string;
}
export declare class CompleteOpenIdLoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    loginResponse?: shared.LoginResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
