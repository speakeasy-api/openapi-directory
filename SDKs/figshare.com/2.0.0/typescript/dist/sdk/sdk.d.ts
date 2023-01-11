import { AxiosInstance } from "axios";
import { Articles } from "./articles";
import { Authors } from "./authors";
import { Collections } from "./collections";
import { Institutions } from "./institutions";
import { Other } from "./other";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://api.figshare.com/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    articles: Articles;
    authors: Authors;
    collections: Collections;
    institutions: Institutions;
    other: Other;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
