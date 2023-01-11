import { AxiosInstance } from "axios";
import { DocumentClassification } from "./documentclassification";
import { InformationRetrieval } from "./informationretrieval";
import { Metrics } from "./metrics";
export declare const ServerList: readonly ["http://api.datumbox.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    documentClassification: DocumentClassification;
    informationRetrieval: InformationRetrieval;
    metrics: Metrics;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
