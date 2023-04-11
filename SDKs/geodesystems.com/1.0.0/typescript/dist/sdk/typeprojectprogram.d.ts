import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Program' entry type
 */
export declare class TypeProjectProgram {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Program' entry type
     *
     * @remarks
     * API to search for entries of type Program
     */
    searchProjectProgram(req: operations.SearchProjectProgramRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectProgramResponse>;
}
