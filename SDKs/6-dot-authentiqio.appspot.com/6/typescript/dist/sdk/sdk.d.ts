import { AxiosInstance } from "axios";
import { Delete } from "./delete";
import { Get } from "./get";
import { Head } from "./head";
import { Key } from "./key";
import { Login } from "./login";
import { Post } from "./post";
import { Put } from "./put";
import { Scope } from "./scope";
export declare const ServerList: readonly ["https://6-dot-authentiqio.appspot.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
