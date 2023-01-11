import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AttendeesSignins } from "./attendeessignins";
import { Authentication } from "./authentication";
import { Passwords } from "./passwords";
import { TeamMembers } from "./teammembers";
export declare const ServerList: readonly ["http://c19qrserver.local", "https://virtserver.swaggerhub.com/aijaz/QRCodeSigninServer/1.1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    attendeesSignins: AttendeesSignins;
    authentication: Authentication;
    passwords: Passwords;
    teamMembers: TeamMembers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
