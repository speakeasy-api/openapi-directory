import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Cohort' entry type
 */
export declare class TypeBioOntologyCohort {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Cohort' entry type
     *
     * @remarks
     * API to search for entries of type Cohort
     */
    searchBioOntologyCohort(req: operations.SearchBioOntologyCohortRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOntologyCohortResponse>;
}
