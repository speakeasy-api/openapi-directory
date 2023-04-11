import { Assignment } from "./assignment";
import { Auth } from "./auth";
import { Contribution } from "./contribution";
import { Form } from "./form";
import { Info } from "./info";
import { Media } from "./media";
import { Notifications } from "./notifications";
import { Subscriptions } from "./subscriptions";
import { Tag } from "./tag";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.contribly.com/1"];
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
export declare class SDK {
    /**
     * Create and list assignments
     */
    assignment: Assignment;
    /**
     * Authentication related
     */
    auth: Auth;
    /**
     * Submit, moderate and retrieve user contributions
     */
    contribution: Contribution;
    /**
     * Create and edit forms
     */
    form: Form;
    info: Info;
    /**
     * Submit media
     */
    media: Media;
    /**
     * Notifications are templated email messages which can be sent to contributors. A notification might be used to request further information from a contributor or inform them when their contribution has been published.
     */
    notifications: Notifications;
    /**
     * Subscribe to be alerted when events occur. For example receive email notification when a contribution is flagged.
     */
    subscriptions: Subscriptions;
    /**
     * Create and list tags and tag sets
     */
    tag: Tag;
    /**
     * Manage users
     */
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
