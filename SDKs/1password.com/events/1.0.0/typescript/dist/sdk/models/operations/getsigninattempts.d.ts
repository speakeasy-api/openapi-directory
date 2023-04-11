import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSignInAttemptsSecurity extends SpeakeasyBase {
    jwtsa: string;
}
/**
 * Sign-in attempts response object
 */
export declare class GetSignInAttempts200ApplicationJSON extends SpeakeasyBase {
    items?: shared.SignInAttempt[];
}
export declare class GetSignInAttemptsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Sign-in attempts response object
     */
    getSignInAttempts200ApplicationJSONObject?: GetSignInAttempts200ApplicationJSON;
}
