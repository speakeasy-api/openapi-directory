import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Source {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkConnectionToSource - Check connection to the source
    **/
    checkConnectionToSource(req: operations.CheckConnectionToSourceRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceResponse>;
    /**
     * checkConnectionToSourceForUpdate - Check connection for a proposed update to a source
    **/
    checkConnectionToSourceForUpdate(req: operations.CheckConnectionToSourceForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceForUpdateResponse>;
    /**
     * createSource - Create a source
    **/
    createSource(req: operations.CreateSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceResponse>;
    /**
     * deleteSource - Delete a source
    **/
    deleteSource(req: operations.DeleteSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceResponse>;
    /**
     * discoverSchemaForSource - Discover the schema catalog of the source
    **/
    discoverSchemaForSource(req: operations.DiscoverSchemaForSourceRequest, config?: AxiosRequestConfig): Promise<operations.DiscoverSchemaForSourceResponse>;
    /**
     * getSource - Get source
    **/
    getSource(req: operations.GetSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceResponse>;
    /**
     * listSourcesForWorkspace - List sources for workspace
     *
     * List sources for workspace. Does not return deleted sources.
    **/
    listSourcesForWorkspace(req: operations.ListSourcesForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesForWorkspaceResponse>;
    /**
     * updateSource - Update a source
    **/
    updateSource(req: operations.UpdateSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceResponse>;
}
