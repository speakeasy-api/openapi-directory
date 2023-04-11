import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthTokenRequestBody extends SpeakeasyBase {
    /**
     * application name
     */
    application: string;
    /**
     * password when requesting a user token and client_credentials for a payment manage token (default: password)
     */
    grantType?: string;
    /**
     * password
     */
    password: string;
    /**
     * scope requested for the token
     */
    scope?: string;
    /**
     * username
     */
    username: string;
}
export declare class PostAuthToken200ApplicationJSON extends SpeakeasyBase {
    /**
     * duration in seconds of the token validity
     */
    expiresIn?: number;
    /**
     * the token scope
     */
    scope: string;
    /**
     * the requested token
     */
    token: string;
}
export declare class PostAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postAuthToken200ApplicationJSONObject?: PostAuthToken200ApplicationJSON;
}
