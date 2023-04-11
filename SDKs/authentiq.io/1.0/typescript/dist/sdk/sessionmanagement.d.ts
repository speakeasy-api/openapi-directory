import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SessionManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Include a session iframe
     *
     * @remarks
     * An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.
     *
     * The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-session-1_0.html#OPiframe} - OIDC OP Session Management Iframe
     */
    authorizeIframe(req: operations.AuthorizeIframeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeIframeResponse>;
}
