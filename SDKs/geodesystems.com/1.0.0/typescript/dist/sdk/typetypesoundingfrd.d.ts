import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'FRD Sounding' entry type
 */
export declare class TypeTypeSoundingFrd {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'FRD Sounding' entry type
     *
     * @remarks
     * API to search for entries of type FRD Sounding
     */
    searchTypeSoundingFrd(req: operations.SearchTypeSoundingFrdRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingFrdResponse>;
}
