import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminJwtRequestBody extends SpeakeasyBase {
    /**
     * number of minute before the token expiration (0 for token that won't expire unless the client application is deleted) (default: 1)
     */
    duration?: number;
    /**
     * scope requested for the token (default: config)
     */
    scope?: string;
}
export declare class PostAdminJwtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postAdminJwt200ApplicationJSONObject?: Record<string, any>;
}
