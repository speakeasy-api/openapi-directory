import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Project {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProjectAnalyses - List all analyses for a project
     *
     * List all analyses for a project
    **/
    getProjectAnalyses(req: operations.GetProjectAnalysesRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectAnalysesResponse>;
    /**
     * getProjectUrlsAggs - Project Query aggregator
     *
     * Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project
    **/
    getProjectUrlsAggs(req: operations.GetProjectUrlsAggsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectUrlsAggsResponse>;
    /**
     * getSavedFilter - Retrieves a specific saved filter's name, ID and filter value
     *
     * Retrieves a specific saved filter's name, ID and filter value
    **/
    getSavedFilter(req: operations.GetSavedFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedFilterResponse>;
    /**
     * getSavedFilters - List all the project's saved filters (each filter's name, ID and filter value)
     *
     * List all the project's saved filters (each filter's name, ID and filter value)
    **/
    getSavedFilters(req: operations.GetSavedFiltersRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedFiltersResponse>;
    /**
     * testUrlRewritingRules - Match and replace parts of a URL based on rules passed in POST data
     *
     * Match and replace parts of a URL based on rules passed in POST data.
    **/
    testUrlRewritingRules(req: operations.TestUrlRewritingRulesRequest, config?: AxiosRequestConfig): Promise<operations.TestUrlRewritingRulesResponse>;
}
