import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CatalogsImportationCatalogInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configure catalog column
     */
    importationConfigureCatalogColumn(req: operations.ImportationConfigureCatalogColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationConfigureCatalogColumnResponse>;
    /**
     * Delete Custom Column
     */
    importationDeleteCustomColumn(req: operations.ImportationDeleteCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationDeleteCustomColumnResponse>;
    /**
     * Get the encrypted custom column expression in this importation
     */
    importationGetCustomColumnExpression(req: operations.ImportationGetCustomColumnExpressionRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetCustomColumnExpressionResponse>;
    /**
     * Get custom columns currently place in this importation
     */
    importationGetCustomColumns(req: operations.ImportationGetCustomColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetCustomColumnsResponse>;
    /**
     * Get detected catalog columns during this importation.
     */
    importationGetDetectedCatalogColumns(req: operations.ImportationGetDetectedCatalogColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetDetectedCatalogColumnsResponse>;
    /**
     * Get the product sample related to this importation with all columns (catalog and custom)
     */
    importationGetProductSample(req: operations.ImportationGetProductSampleRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetProductSampleResponse>;
    /**
     * Get product sample custom column value related to this importation.
     *
     * @remarks
     * /!\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values
     */
    importationGetProductSampleCustomColumnValue(req: operations.ImportationGetProductSampleCustomColumnValueRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetProductSampleCustomColumnValueResponse>;
    /**
     * Ignore Column
     */
    importationIgnoreColumn(req: operations.ImportationIgnoreColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationIgnoreColumnResponse>;
    /**
     * Map catalog column to a BeezUP column
     */
    importationMapCatalogColumn(req: operations.ImportationMapCatalogColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationMapCatalogColumnResponse>;
    /**
     * Map custom column to a BeezUP column
     */
    importationMapCustomColumn(req: operations.ImportationMapCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationMapCustomColumnResponse>;
    /**
     * Reattend Column
     */
    importationReattendColumn(req: operations.ImportationReattendColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationReattendColumnResponse>;
    /**
     * Create or replace a custom column
     */
    importationSaveCustomColumn(req: operations.ImportationSaveCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationSaveCustomColumnResponse>;
    /**
     * Unmap catalog column
     */
    importationUnmapCatalogColumn(req: operations.ImportationUnmapCatalogColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationUnmapCatalogColumnResponse>;
    /**
     * Unmap custom column
     */
    importationUnmapCustomColumn(req: operations.ImportationUnmapCustomColumnRequest, config?: AxiosRequestConfig): Promise<operations.ImportationUnmapCustomColumnResponse>;
}
