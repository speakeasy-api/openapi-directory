import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SourceDefinition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSourceDefinition - Creates a sourceDefinition
    **/
    createSourceDefinition(req: operations.CreateSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceDefinitionResponse>;
    /**
     * getSourceDefinition - Get source
    **/
    getSourceDefinition(req: operations.GetSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionResponse>;
    /**
     * listLatestSourceDefinitions - List the latest sourceDefinitions Airbyte supports
     *
     * Guaranteed to retrieve the latest information on supported sources.
    **/
    listLatestSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestSourceDefinitionsResponse>;
    /**
     * listSourceDefinitions - List all the sourceDefinitions the current Airbyte deployment is configured to use
    **/
    listSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListSourceDefinitionsResponse>;
    /**
     * updateSourceDefinition - Update a sourceDefinition
    **/
    updateSourceDefinition(req: operations.UpdateSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceDefinitionResponse>;
}
