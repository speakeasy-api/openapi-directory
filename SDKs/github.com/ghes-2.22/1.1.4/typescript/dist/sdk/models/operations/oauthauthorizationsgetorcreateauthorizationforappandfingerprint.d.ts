import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody extends SpeakeasyBase {
    /**
     * The OAuth app client secret for which to create the token.
     */
    clientSecret: string;
    /**
     * A note to remind you what the OAuth token is for.
     */
    note?: string;
    /**
     * A URL to remind you what app the OAuth token is for.
     */
    noteUrl?: string;
    /**
     * A list of scopes that this authorization is in.
     */
    scopes?: string[];
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest extends SpeakeasyBase {
    requestBody: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;
    /**
     * The client ID of your GitHub app.
     */
    clientId: string;
    fingerprint: string;
}
export declare class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * if returning an existing token
     */
    authorization?: shared.Authorization;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
