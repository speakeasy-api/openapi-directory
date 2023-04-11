import { AttendeesSignins } from "./attendeessignins";
import { Authentication } from "./authentication";
import * as shared from "./models/shared";
import { Passwords } from "./passwords";
import { TeamMembers } from "./teammembers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://c19qrserver.local", "https://virtserver.swaggerhub.com/aijaz/QRCodeSigninServer/1.1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the API for the COVID-19 Contact Tracing QRCode Signin Server
 */
export declare class SDK {
    /**
     * Endpoints related to attendees signing in on the premises
     */
    attendeesSignins: AttendeesSignins;
    /**
     * Authentication-related endpoints
     */
    authentication: Authentication;
    /**
     * Endpoints related to changing and resetting passwords
     */
    passwords: Passwords;
    /**
     * Endpoints related to team member user accounts
     */
    teamMembers: TeamMembers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
