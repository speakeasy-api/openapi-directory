import { AxiosInstance } from "axios";
import { Auth } from "./auth";
import { Chapter } from "./chapter";
import { Verse } from "./verse";
export declare const ServerList: readonly ["https://bhagavadgita.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    auth: Auth;
    chapter: Chapter;
    verse: Verse;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
