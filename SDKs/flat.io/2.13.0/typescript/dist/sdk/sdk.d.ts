import { AxiosInstance } from "axios";
import { Account } from "./account";
import { Class } from "./class";
import { Collection } from "./collection";
import { Group } from "./group";
import { Organization } from "./organization";
import { Score } from "./score";
import { User } from "./user";
export declare const ServerList: readonly ["https://api.flat.io/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    class: Class;
    collection: Collection;
    group: Group;
    organization: Organization;
    score: Score;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
