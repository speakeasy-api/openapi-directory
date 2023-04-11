import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InitiateOpenIdLoginRequest extends SpeakeasyBase {
    /**
     * Issuer identifier of the OpenID Connect identity provider
     */
    issuer: string;
    /**
     * Language ID or ISO 639-1 code
     */
    language: string;
    /**
     * Redirect URI to complete the OpenID Connect authentication
     */
    redirectUri: string;
    /**
     * Flag to test the authentication parameters.
     *
     * @remarks
     *
     * If the request is valid, the API will respond with `204 No Content`.
     */
    test: boolean;
}
export declare class InitiateOpenIdLoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
