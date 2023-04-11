import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Taxonomic Entry' entry type
 */
export declare class TypeBioTaxonomy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Taxonomic Entry' entry type
     *
     * @remarks
     * API to search for entries of type Taxonomic Entry
     */
    searchBioTaxonomy(req: operations.SearchBioTaxonomyRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioTaxonomyResponse>;
}
