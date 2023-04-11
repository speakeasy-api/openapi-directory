import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangePasswordPoliciesConfigRequest extends SpeakeasyBase {
    updatePasswordPoliciesConfig: shared.UpdatePasswordPoliciesConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ChangePasswordPoliciesConfigResponse extends SpeakeasyBase {
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
