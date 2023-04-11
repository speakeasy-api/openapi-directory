import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Notebook' entry type
 */
export declare class TypeNotesNotebook {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Notebook' entry type
     *
     * @remarks
     * API to search for entries of type Notebook
     */
    searchNotesNotebook(req: operations.SearchNotesNotebookRequest, config?: AxiosRequestConfig): Promise<operations.SearchNotesNotebookResponse>;
}
