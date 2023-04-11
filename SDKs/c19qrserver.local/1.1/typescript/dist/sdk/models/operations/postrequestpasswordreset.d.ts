import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Request Password Reset Payload
 */
export declare class PostRequestPasswordResetSample extends SpeakeasyBase {
    /**
     * The user whose password you want to reset
     */
    email?: string;
}
export declare class PostRequestPasswordResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
    /**
     * Success
     */
    requestPasswordResetResponse?: shared.RequestPasswordResetResponse;
}
