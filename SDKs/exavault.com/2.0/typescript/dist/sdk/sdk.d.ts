import { Account } from "./account";
import { Activity } from "./activity";
import { Email } from "./email";
import { EmailLists } from "./emaillists";
import { Form } from "./form";
import { Notifications } from "./notifications";
import { Recipients } from "./recipients";
import { Resources } from "./resources";
import { Shares } from "./shares";
import { SSHKeys } from "./sshkeys";
import { Users } from "./users";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://accountname.exavault.com/api/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * ExaVaults API allows you to incorporate ExaVaults suite of file transfer and user management tools into your own application.\nExaVault supports both POST (recommended when requesting large data sets) and GET operations, and requires an API key in order to use.
 *
 * @see {@link https://www.exavault.com/developer/}
 */
export declare class SDK {
    /**
     * The account APIs allow you review and change account settings. Many account settings will have immediate effects on all current and future users, so consider adding a user facing confirmation step before sending an update call.
     */
    account: Account;
    /**
     * The activity APIs allow you to get logs from your account. We track multiple types of under the umbrellas; __Activity Logs__ that show an action a user performed or initiated on a file, folder or the account. __Webhooks Logs__ that show records of all outbound webhook calls made by ExaVault. Both can be optionally filtered to only return specific data you’re looking for.
     */
    activity: Activity;
    /**
     * The emails APIs allow you to generate welcome emails for account users and referral emails.
     */
    email: Email;
    /**
     * The email lists APIs allow you to manage email lists that can be used for speeding up actions within the ExaVault File Manager such as adding your marketing team, Tom, Jane, and Harry, to a shared folder in a single action instead of three.
     */
    emailLists: EmailLists;
    /**
     * The forms APIs allow you to manage the inputs and data submitted through receive folder forms.
     */
    form: Form;
    /**
     * The notifications APIs allow you to set up and manage notifications in your account. When an action is taken on a file folder, you can be notified via email or webhook.
     */
    notifications: Notifications;
    /**
     * The recipients APIs allow to retrieve, delete, or resend invitations for recipients of shared folders.
     */
    recipients: Recipients;
    /**
     * The file and folder management APIs allow you to work with the core of your account. You can upload or download files and create, move and delete files & folders, to name a few options.
     */
    resources: Resources;
    /**
     * THe SSH Keys APIs allow you to manage SSH keys for users in your account. You can upload the contents of a public key for a user, get information for keys which are already defined, and remove a key from a user.
     */
    sshKeys: SSHKeys;
    /**
     * The sharing APIs allow you create and manage shares. Shares can be used to send a single file, share a folder, or set up a receive folder and its input form.
     */
    shares: Shares;
    /**
     * The user APIs allow you to create, update and delete users from your account. Users can be assigned unique permissions, set to expire after a certain time period, and more.
     */
    users: Users;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
