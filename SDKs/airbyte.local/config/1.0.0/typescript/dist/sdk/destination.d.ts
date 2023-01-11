import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Destination {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkConnectionToDestination - Check connection to the destination
    **/
    checkConnectionToDestination(req: operations.CheckConnectionToDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationResponse>;
    /**
     * checkConnectionToDestinationForUpdate - Check connection for a proposed update to a destination
    **/
    checkConnectionToDestinationForUpdate(req: operations.CheckConnectionToDestinationForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationForUpdateResponse>;
    /**
     * createDestination - Create a destination
    **/
    createDestination(req: operations.CreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationResponse>;
    /**
     * deleteDestination - Delete the destination
    **/
    deleteDestination(req: operations.DeleteDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationResponse>;
    /**
     * getDestination - Get configured destination
    **/
    getDestination(req: operations.GetDestinationRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationResponse>;
    /**
     * listDestinationsForWorkspace - List configured destinations for a workspace
    **/
    listDestinationsForWorkspace(req: operations.ListDestinationsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListDestinationsForWorkspaceResponse>;
    /**
     * updateDestination - Update a destination
    **/
    updateDestination(req: operations.UpdateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationResponse>;
}
