import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthJwtRequestBody extends SpeakeasyBase {
    /**
     * id of the client
     */
    clientId?: string;
    /**
     * secret for the client
     */
    clientSecret?: string;
    /**
     * if set to True, the token will expire n minutes after its creation, n being the value of configuration key auth.default_token_expire (default: True)
     */
    expire?: boolean;
    /**
     * user for whom the token has to be generated. If not supplied, a user will be created
     */
    idUser?: number;
    /**
     * scope requested for the token
     */
    scope?: string;
}
export declare class PostAuthJwt200ApplicationJSON extends SpeakeasyBase {
    /**
     * the jwt token
     */
    jwtToken: string;
    /**
     * the payload contained in the jwt token
     */
    payload: Record<string, any>;
}
export declare class PostAuthJwtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postAuthJwt200ApplicationJSONObject?: PostAuthJwt200ApplicationJSON;
}
