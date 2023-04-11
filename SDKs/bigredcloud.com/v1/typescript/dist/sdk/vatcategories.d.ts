import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VatCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of global Vat Categories. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" field.
     */
    vatCategoriesGet(config?: AxiosRequestConfig): Promise<operations.VatCategoriesGetResponse>;
    /**
     * Process Vat Rates
     */
    vatCategoriesProcessVatRates(req: shared.VatRatesByVatCategoryDto[], config?: AxiosRequestConfig): Promise<operations.VatCategoriesProcessVatRatesResponse>;
}
