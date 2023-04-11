import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthTokenAccessRequestBody extends SpeakeasyBase {
    /**
     * ID of the client
     */
    clientId: string;
    /**
     * secret of the client
     */
    clientSecret: string;
    /**
     * user's temporary code
     */
    code: string;
    /**
     * default is "authorization_code"
     */
    grantType?: string;
    /**
     * redirect uri used by user
     */
    redirectUri?: string;
}
export declare class PostAuthTokenAccess200ApplicationJSON extends SpeakeasyBase {
    /**
     * the access token transformed from the temporary one
     */
    accessToken: string;
    /**
     * the access token type
     */
    tokenType: string;
}
export declare class PostAuthTokenAccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postAuthTokenAccess200ApplicationJSONObject?: PostAuthTokenAccess200ApplicationJSON;
}
