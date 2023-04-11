import { Authentication } from "./authentication";
import { Discovery } from "./discovery";
import * as shared from "./models/shared";
import { Namespaces } from "./namespaces";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://hub.docker.com/api/publisher/analytics/v1", "https://docker.com/{version}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The Docker DVP Data API allows [Docker Verified Publishers](https://docs.docker.com/docker-hub/publish/) to view image pull analytics data for their namespaces. Analytics data can be retrieved as raw data, or in a summary format.
 *
 * @remarks
 *
 * #### Summary data
 *
 * In your summary data CSV, you will have access to the data points listed below. You can request summary data for a complete week (Monday through Sunday) or for a complete month (available on the first day of the following month).
 *
 * There are two levels of summary data:
 *
 * - Repository-level, a summary of every namespace and repository
 * - Tag- or digest-level, a summary of every namespace, repository, and reference
 *   (tag or digest)
 *
 *  The summary data formats contain the following data points:
 *
 * - Unique IP address count
 * - Pulls by tag count
 * - Pulls by digest count
 * - Version check count
 *
 * #### Raw data
 *
 * In your raw data CSV you will have access to the data points listed below. You can request raw data for a complete week (Monday through Sunday) or for a complete month (available on the first day of the following month). **Note:** each action is represented as a single row.
 *
 * - Type (industry)
 * - Host (cloud provider)
 * - Country (geolocation)
 * - Timestamp
 * - Namespace
 * - Repository
 * - Reference (digest is always included, tag is provided when available)
 * - HTTP request method
 * - Action, one of the following:
 *   - Pull by tag
 *   - Pull by digest
 *   - Version check
 * - User-Agent
 *
 */
export declare class SDK {
    authentication: Authentication;
    discovery: Discovery;
    namespaces: Namespaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
