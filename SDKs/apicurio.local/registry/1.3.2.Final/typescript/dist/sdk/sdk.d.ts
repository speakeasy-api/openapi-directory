import { AxiosInstance } from "axios";
import { ArtifactRules } from "./artifactrules";
import { Artifacts } from "./artifacts";
import { GlobalRules } from "./globalrules";
import { Metadata } from "./metadata";
import { Search } from "./search";
import { Versions } from "./versions";
export declare const ServerList: readonly ["http://apicurio.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    artifactRules: ArtifactRules;
    artifacts: Artifacts;
    globalRules: GlobalRules;
    metadata: Metadata;
    search: Search;
    versions: Versions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
