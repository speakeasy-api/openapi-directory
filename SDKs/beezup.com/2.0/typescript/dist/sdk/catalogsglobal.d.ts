import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CatalogsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * catalogIndex - Get the index of the catalog API
     *
     * The operation will give you all the operations you will be able to do and all the LOV used in this API.
    **/
    catalogIndex(config?: AxiosRequestConfig): Promise<operations.CatalogIndexResponse>;
    /**
     * catalogGetBeezUpColumns - Get the BeezUP columns
     *
     * Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.
    **/
    catalogGetBeezUpColumns(config?: AxiosRequestConfig): Promise<operations.CatalogGetBeezUpColumnsResponse>;
}
