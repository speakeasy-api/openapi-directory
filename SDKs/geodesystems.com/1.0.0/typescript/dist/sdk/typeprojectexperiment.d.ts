import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Experiment' entry type
 */
export declare class TypeProjectExperiment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Experiment' entry type
     *
     * @remarks
     * API to search for entries of type Experiment
     */
    searchProjectExperiment(req: operations.SearchProjectExperimentRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectExperimentResponse>;
}
