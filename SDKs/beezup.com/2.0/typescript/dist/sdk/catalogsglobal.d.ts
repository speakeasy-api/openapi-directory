import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CatalogsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the index of the catalog API
     *
     * @remarks
     * The operation will give you all the operations you will be able to do and all the LOV used in this API.
     */
    catalogIndex(config?: AxiosRequestConfig): Promise<operations.CatalogIndexResponse>;
    /**
     * Get the BeezUP columns
     *
     * @remarks
     * Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.
     */
    catalogGetBeezUPColumns(config?: AxiosRequestConfig): Promise<operations.CatalogGetBeezUPColumnsResponse>;
}
