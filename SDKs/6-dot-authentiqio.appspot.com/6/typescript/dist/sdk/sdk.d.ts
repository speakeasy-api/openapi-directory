import { Delete } from "./delete";
import { Get } from "./get";
import { Head } from "./head";
import { Key } from "./key";
import { Login } from "./login";
import { Post } from "./post";
import { Put } from "./put";
import { Scope } from "./scope";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://6-dot-authentiqio.appspot.com"];
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
 * Strong authentication, without the passwords.
 */
export declare class SDK {
    delete: Delete;
    get: Get;
    head: Head;
    key: Key;
    login: Login;
    post: Post;
    put: Put;
    scope: Scope;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
