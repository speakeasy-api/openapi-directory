import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthRenewRequestBody extends SpeakeasyBase {
    /**
     * ID of the client
     */
    clientId: string;
    /**
     * secret of the client
     */
    clientSecret: string;
    /**
     * default is "client_credentials"
     */
    grantType?: string;
    /**
     * id of the user to generate a token for
     */
    idUser: number;
    /**
     * if true, all other permanent tokens for the user will be deleted
     */
    revokePrevious?: boolean;
}
export declare class PostAuthRenew200ApplicationJSON extends SpeakeasyBase {
    /**
     * the access token transformed from the temporary one
     */
    accessToken: string;
    /**
     * the access token type
     */
    tokenType: string;
}
export declare class PostAuthRenewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postAuthRenew200ApplicationJSONObject?: PostAuthRenew200ApplicationJSON;
}
