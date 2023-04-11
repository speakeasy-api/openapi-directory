import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'OME TIFF File' entry type
 */
export declare class TypeBioOmeTiff {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'OME TIFF File' entry type
     *
     * @remarks
     * API to search for entries of type OME TIFF File
     */
    searchBioOmeTiff(req: operations.SearchBioOmeTiffRequest, config?: AxiosRequestConfig): Promise<operations.SearchBioOmeTiffResponse>;
}
