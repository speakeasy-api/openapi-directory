import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserTokenRequestBody extends SpeakeasyBase {
    /**
     * application name
     */
    application: string;
}
export declare class PostUsersIdUserTokenRequest extends SpeakeasyBase {
    requestBody: PostUsersIdUserTokenRequestBody;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postUsersIdUserToken200ApplicationJSONObject?: Record<string, any>;
}
