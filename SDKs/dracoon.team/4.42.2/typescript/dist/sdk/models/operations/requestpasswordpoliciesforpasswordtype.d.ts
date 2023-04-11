import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Password type
 */
export declare enum RequestPasswordPoliciesForPasswordTypePasswordTypeEnum {
    Login = "login",
    Encryption = "encryption",
    Shares = "shares"
}
export declare class RequestPasswordPoliciesForPasswordTypeRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Password type
     */
    passwordType: RequestPasswordPoliciesForPasswordTypePasswordTypeEnum;
}
export declare class RequestPasswordPoliciesForPasswordTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    passwordPoliciesConfig?: shared.PasswordPoliciesConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
