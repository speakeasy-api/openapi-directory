import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TokenRequestBody extends SpeakeasyBase {
    /**
     * The registered client ID.
     *
     * @remarks
     *
     */
    clientId: string;
    /**
     * The registered client ID secret.
     *
     * @remarks
     *
     */
    clientSecret: string;
    /**
     * The authorization code previously obtained from the Authentication endpoint.
     *
     * @remarks
     *
     */
    code: string;
    /**
     * The authorization grant type, must be `authorization_code`.
     *
     * @remarks
     *
     */
    grantType: string;
    /**
     * The redirect URL that was used previously with the Authentication endpoint.
     *
     * @remarks
     *
     */
    redirectUri: string;
}
export declare class TokenRequest extends SpeakeasyBase {
    /**
     * HTTP Basic authorization header.
     *
     * @remarks
     *
     */
    authorization?: string;
    requestBody: TokenRequestBody;
}
export declare class TokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OAuth 2.0 error response
     */
    oAuth2Error?: shared.OAuth2Error;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Token response
     */
    token?: shared.Token;
}
