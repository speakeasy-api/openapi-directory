import { Account } from "./account";
import { Avatars } from "./avatars";
import { Database } from "./database";
import { Functions } from "./functions";
import { Health } from "./health";
import { Locale } from "./locale";
import { Storage } from "./storage";
import { Teams } from "./teams";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://appwrite.io/v1"];
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
 * Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)
 *
 * @see {@link https://appwrite.io/docs} - Full API docs, specs and tutorials
 */
export declare class SDK {
    /**
     * The Account service allows you to authenticate and manage a user account.
     */
    account: Account;
    /**
     * The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.
     */
    avatars: Avatars;
    /**
     * The Database service allows you to create structured collections of documents, query and filter lists of documents
     */
    database: Database;
    /**
     * The Functions Service allows you view, create and manage your Cloud Functions.
     */
    functions: Functions;
    /**
     * The Health service allows you to both validate and monitor your Appwrite server's health.
     */
    health: Health;
    /**
     * The Locale service allows you to customize your app based on your users' location.
     */
    locale: Locale;
    /**
     * The Storage service allows you to manage your project files.
     */
    storage: Storage;
    /**
     * The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources
     */
    teams: Teams;
    /**
     * The Users service allows you to manage your project users.
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
