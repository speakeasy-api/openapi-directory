import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthInitRequestBody extends SpeakeasyBase {
    /**
     * ID of the client
     */
    clientId?: string;
    /**
     * secret of the client
     */
    clientSecret?: string;
}
export declare class PostAuthInit200ApplicationJSON extends SpeakeasyBase {
    /**
     * new token created for the new anonymous user
     */
    authToken: string;
    /**
     * duration in seconds of the token validity
     */
    expiresIn?: number;
    /**
     * type of the token
     */
    type: string;
}
export declare class PostAuthInitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postAuthInit200ApplicationJSONObject?: PostAuthInit200ApplicationJSON;
}
