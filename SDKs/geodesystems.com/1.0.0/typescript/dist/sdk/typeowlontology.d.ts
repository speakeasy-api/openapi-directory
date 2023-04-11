import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'OWL Ontology' entry type
 */
export declare class TypeOwlOntology {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'OWL Ontology' entry type
     *
     * @remarks
     * API to search for entries of type OWL Ontology
     */
    searchOwlOntology(req: operations.SearchOwlOntologyRequest, config?: AxiosRequestConfig): Promise<operations.SearchOwlOntologyResponse>;
}
