import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Password Reset Payload
 */
export declare class PostVerifyPasswordChangeSample extends SpeakeasyBase {
    /**
     * The password reset code
     */
    guid?: string;
    /**
     * The new password
     */
    password?: string;
}
export declare class PostVerifyPasswordChangeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
}
