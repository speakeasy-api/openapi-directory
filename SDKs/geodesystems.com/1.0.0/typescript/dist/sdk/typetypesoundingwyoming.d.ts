import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'UW Sounding' entry type
 */
export declare class TypeTypeSoundingWyoming {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'UW Sounding' entry type
     *
     * @remarks
     * API to search for entries of type UW Sounding
     */
    searchTypeSoundingWyoming(req: operations.SearchTypeSoundingWyomingRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingWyomingResponse>;
}
