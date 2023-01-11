import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Attachments } from "./attachments";
import { BlockedNumbers } from "./blockednumbers";
import { Message } from "./message";
import { Profile } from "./profile";
import { Webhooks } from "./webhooks";
export declare const ServerList: readonly ["https://api.bulksms.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    attachments: Attachments;
    blockedNumbers: BlockedNumbers;
    message: Message;
    profile: Profile;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
