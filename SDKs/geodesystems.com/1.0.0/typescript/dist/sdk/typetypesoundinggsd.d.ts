import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'GSD Sounding' entry type
 */
export declare class TypeTypeSoundingGsd {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'GSD Sounding' entry type
     *
     * @remarks
     * API to search for entries of type GSD Sounding
     */
    searchTypeSoundingGsd(req: operations.SearchTypeSoundingGsdRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingGsdResponse>;
}
