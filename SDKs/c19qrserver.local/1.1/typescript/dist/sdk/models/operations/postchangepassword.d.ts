import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Change Password Payload
 */
export declare class PostChangePasswordSample extends SpeakeasyBase {
    /**
     * The old (current) password
     */
    oldPassword?: string;
    /**
     * The new password
     */
    password?: string;
}
export declare class PostChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
}
