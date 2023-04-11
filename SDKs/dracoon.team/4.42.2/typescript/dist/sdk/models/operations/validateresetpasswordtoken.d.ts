import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateResetPasswordTokenRequest extends SpeakeasyBase {
    /**
     * Password reset token
     */
    token: string;
}
export declare class ValidateResetPasswordTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    resetPasswordTokenValidateResponse?: shared.ResetPasswordTokenValidateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
