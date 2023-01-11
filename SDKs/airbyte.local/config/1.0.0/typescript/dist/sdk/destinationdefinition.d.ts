import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DestinationDefinition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDestinationDefinition - Creates a destinationsDefinition
    **/
    createDestinationDefinition(req: operations.CreateDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationDefinitionResponse>;
    /**
     * getDestinationDefinition - Get destinationDefinition
    **/
    getDestinationDefinition(req: operations.GetDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionResponse>;
    /**
     * listDestinationDefinitions - List all the destinationDefinitions the current Airbyte deployment is configured to use
    **/
    listDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListDestinationDefinitionsResponse>;
    /**
     * listLatestDestinationDefinitions - List the latest destinationDefinitions Airbyte supports
     *
     * Guaranteed to retrieve the latest information on supported destinations.
    **/
    listLatestDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestDestinationDefinitionsResponse>;
    /**
     * updateDestinationDefinition - Update destinationDefinition
    **/
    updateDestinationDefinition(req: operations.UpdateDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationDefinitionResponse>;
}
