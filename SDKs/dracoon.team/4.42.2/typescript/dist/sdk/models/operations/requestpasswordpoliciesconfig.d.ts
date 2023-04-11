import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestPasswordPoliciesConfigRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RequestPasswordPoliciesConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    passwordPoliciesConfig?: shared.PasswordPoliciesConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
