import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Glossary' entry type
 */
export declare class TypeGlossary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Glossary' entry type
     *
     * @remarks
     * API to search for entries of type Glossary
     */
    searchGlossary(req: operations.SearchGlossaryRequest, config?: AxiosRequestConfig): Promise<operations.SearchGlossaryResponse>;
}
