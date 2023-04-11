import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClientSecurity extends SpeakeasyBase {
    clientRegistrationToken?: string;
    oauthCode?: string;
    oauthImplicit?: string;
}
export declare class GetClientRequest extends SpeakeasyBase {
    /**
     * Client identifier
     */
    clientId: string;
}
export declare class GetClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Client found
     */
    client?: shared.Client;
    contentType: string;
    /**
     * OAuth 2.0 error response
     */
    oAuth2Error?: shared.OAuth2Error;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
