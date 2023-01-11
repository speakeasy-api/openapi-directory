import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Activities } from "./activities";
import { Companies } from "./companies";
import { Contacts } from "./contacts";
import { Leads } from "./leads";
import { Notes } from "./notes";
import { Opportunities } from "./opportunities";
import { Pipelines } from "./pipelines";
import { Users } from "./users";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    activities: Activities;
    companies: Companies;
    contacts: Contacts;
    leads: Leads;
    notes: Notes;
    opportunities: Opportunities;
    pipelines: Pipelines;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
