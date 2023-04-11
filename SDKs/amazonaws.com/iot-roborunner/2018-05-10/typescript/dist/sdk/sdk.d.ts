import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://iotroborunner.{region}.amazonaws.com", "https://iotroborunner.{region}.amazonaws.com", "http://iotroborunner.{region}.amazonaws.com.cn", "https://iotroborunner.{region}.amazonaws.com.cn"];
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
 * An example service, deployed with the Octane Service creator, which will echo the string
 *
 * @see {@link https://docs.aws.amazon.com/iotroborunner/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Grants permission to create a destination
     */
    createDestination(req: operations.CreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationResponse>;
    /**
     * Grants permission to create a site
     */
    createSite(req: operations.CreateSiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateSiteResponse>;
    /**
     * Grants permission to create a worker
     */
    createWorker(req: operations.CreateWorkerRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkerResponse>;
    /**
     * Grants permission to create a worker fleet
     */
    createWorkerFleet(req: operations.CreateWorkerFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkerFleetResponse>;
    /**
     * Grants permission to delete a destination
     */
    deleteDestination(req: operations.DeleteDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationResponse>;
    /**
     * Grants permission to delete a site
     */
    deleteSite(req: operations.DeleteSiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSiteResponse>;
    /**
     * Grants permission to delete a worker
     */
    deleteWorker(req: operations.DeleteWorkerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkerResponse>;
    /**
     * Grants permission to delete a worker fleet
     */
    deleteWorkerFleet(req: operations.DeleteWorkerFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkerFleetResponse>;
    /**
     * Grants permission to get a destination
     */
    getDestination(req: operations.GetDestinationRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationResponse>;
    /**
     * Grants permission to get a site
     */
    getSite(req: operations.GetSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * Grants permission to get a worker
     */
    getWorker(req: operations.GetWorkerRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkerResponse>;
    /**
     * Grants permission to get a worker fleet
     */
    getWorkerFleet(req: operations.GetWorkerFleetRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkerFleetResponse>;
    /**
     * Grants permission to list destinations
     */
    listDestinations(req: operations.ListDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDestinationsResponse>;
    /**
     * Grants permission to list sites
     */
    listSites(req: operations.ListSitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSitesResponse>;
    /**
     * Grants permission to list worker fleets
     */
    listWorkerFleets(req: operations.ListWorkerFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkerFleetsResponse>;
    /**
     * Grants permission to list workers
     */
    listWorkers(req: operations.ListWorkersRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkersResponse>;
    /**
     * Grants permission to update a destination
     */
    updateDestination(req: operations.UpdateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationResponse>;
    /**
     * Grants permission to update a site
     */
    updateSite(req: operations.UpdateSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiteResponse>;
    /**
     * Grants permission to update a worker
     */
    updateWorker(req: operations.UpdateWorkerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkerResponse>;
    /**
     * Grants permission to update a worker fleet
     */
    updateWorkerFleet(req: operations.UpdateWorkerFleetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkerFleetResponse>;
}
