import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'COD Sounding' entry type
 */
export declare class TypeTypeSoundingCod {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'COD Sounding' entry type
     *
     * @remarks
     * API to search for entries of type COD Sounding
     */
    searchTypeSoundingCod(req: operations.SearchTypeSoundingCodRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeSoundingCodResponse>;
}
