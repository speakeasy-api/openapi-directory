import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetPasswordRequest extends SpeakeasyBase {
    resetPasswordWithTokenRequest: shared.ResetPasswordWithTokenRequest;
    /**
     * Password reset token
     */
    token: string;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    resetPassword400ApplicationJSONOneOf?: any;
}
