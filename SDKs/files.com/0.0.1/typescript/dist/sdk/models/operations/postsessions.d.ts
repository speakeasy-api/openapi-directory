import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSessionsRequestBody extends SpeakeasyBase {
    /**
     * If this user has a 2FA device, provide its OTP or code here.
     */
    otp?: string;
    /**
     * Identifier for a partially-completed login
     */
    partialSessionId?: string;
    /**
     * Password for sign in
     */
    password?: string;
    /**
     * Username to sign in as
     */
    username?: string;
}
export declare class PostSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Sessions object.
     */
    sessionEntity?: shared.SessionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
