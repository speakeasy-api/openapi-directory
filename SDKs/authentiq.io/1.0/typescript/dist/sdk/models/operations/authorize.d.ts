import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AuthorizeRequest extends SpeakeasyBase {
    /**
     * A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/).
     *
     * @remarks
     *
     */
    clientId: string;
    /**
     * The authentication display mode, which can be one of `page`, `popup` or `modal`. Defaults to `page`.
     *
     * @remarks
     *
     */
    display?: string;
    /**
     * Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.
     *
     * @remarks
     *
     */
    maxAge?: number;
    /**
     * An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.
     *
     * @remarks
     *
     */
    nonce?: string;
    /**
     * Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: `none`, `login`, `consent`. If `consent` the end-user is asked to (re)confirm what claims they share. Use `none` to check for an active session.
     *
     * @remarks
     *
     */
    prompt?: string;
    /**
     * The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (`response_mode=query`) or as fragments (`response_mode=fragment`). Unless the client is in test-mode this must be one of the registered redirect URLs.
     *
     * @remarks
     *
     */
    redirectUri: string;
    /**
     * Whether to append parameters to the redirect URL in the query string (`query`) or as fragments (`fragment`). This option usually has a sensible default for each of the response types.
     *
     * @remarks
     *
     */
    responseMode?: string;
    /**
     * The OIDC response type to use for this authentication flow. Valid choices are `code`, `id_token`, `token`, `token id_token`, `code id_token` `code token` and `code token id_token`, but a client can be configured with a more restricted set.
     *
     * @remarks
     *
     */
    responseType: string;
    /**
     * The space-separated identity claims to request from the end-user. Always include `openid` as a scope for compatibility with OIDC.
     *
     * @remarks
     *
     */
    scope: string;
    /**
     * An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks.
     *
     * @remarks
     *
     */
    state: string;
    /**
     * Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.
     *
     * @remarks
     *
     */
    uiLocales?: string;
}
export declare class AuthorizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
