import { DocumentClassification } from "./documentclassification";
import { InformationRetrieval } from "./informationretrieval";
import { Metrics } from "./metrics";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.datumbox.com/"];
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
 * Datumbox offers a Machine Learning platform composed of 14 classifiers and Natural Language processing functions. Functions include sentiment analysis, topic classification, readability assessment, language detection, and much more.
 */
export declare class SDK {
    /**
     * Document Classification Functions
     */
    documentClassification: DocumentClassification;
    /**
     * Information Retrieval Functions
     */
    informationRetrieval: InformationRetrieval;
    /**
     * Metrics
     */
    metrics: Metrics;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
