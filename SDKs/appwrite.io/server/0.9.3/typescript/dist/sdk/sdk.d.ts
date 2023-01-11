import { AxiosInstance } from "axios";
import { Account } from "./account";
import { Avatars } from "./avatars";
import { Database } from "./database";
import { Functions } from "./functions";
import { Health } from "./health";
import { Locale } from "./locale";
import { Storage } from "./storage";
import { Teams } from "./teams";
import { Users } from "./users";
export declare const ServerList: readonly ["https://appwrite.io/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    avatars: Avatars;
    database: Database;
    functions: Functions;
    health: Health;
    locale: Locale;
    storage: Storage;
    teams: Teams;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
