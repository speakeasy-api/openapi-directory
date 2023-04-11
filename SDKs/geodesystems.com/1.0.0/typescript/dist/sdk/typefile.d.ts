import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'File' entry type
 */
export declare class TypeFile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'File' entry type
     *
     * @remarks
     * API to search for entries of type File
     */
    searchFile(req: operations.SearchFileRequest, config?: AxiosRequestConfig): Promise<operations.SearchFileResponse>;
}
