import { AxiosInstance } from "axios";
import { Account } from "./account";
import { Activity } from "./activity";
import { Email } from "./email";
import { EmailLists } from "./emaillists";
import { Form } from "./form";
import { Notifications } from "./notifications";
import { Recipients } from "./recipients";
import { Resources } from "./resources";
import { SshKeys } from "./sshkeys";
import { Shares } from "./shares";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
export declare const ServerList: readonly ["https://accountname.exavault.com/api/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    activity: Activity;
    email: Email;
    emailLists: EmailLists;
    form: Form;
    notifications: Notifications;
    recipients: Recipients;
    resources: Resources;
    sshKeys: SshKeys;
    shares: Shares;
    users: Users;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
