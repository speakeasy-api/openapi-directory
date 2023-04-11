import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TaxRates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Tax Rate
     *
     * @remarks
     * Create Tax Rate
     */
    taxRatesAdd(req: operations.TaxRatesAddRequest, security: operations.TaxRatesAddSecurity, config?: AxiosRequestConfig): Promise<operations.TaxRatesAddResponse>;
    /**
     * List Tax Rates
     *
     * @remarks
     * List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks
     *
     */
    taxRatesAll(req: operations.TaxRatesAllRequest, security: operations.TaxRatesAllSecurity, config?: AxiosRequestConfig): Promise<operations.TaxRatesAllResponse>;
    /**
     * Delete Tax Rate
     *
     * @remarks
     * Delete Tax Rate
     */
    taxRatesDelete(req: operations.TaxRatesDeleteRequest, security: operations.TaxRatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TaxRatesDeleteResponse>;
    /**
     * Get Tax Rate
     *
     * @remarks
     * Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks
     *
     */
    taxRatesOne(req: operations.TaxRatesOneRequest, security: operations.TaxRatesOneSecurity, config?: AxiosRequestConfig): Promise<operations.TaxRatesOneResponse>;
    /**
     * Update Tax Rate
     *
     * @remarks
     * Update Tax Rate
     */
    taxRatesUpdate(req: operations.TaxRatesUpdateRequest, security: operations.TaxRatesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TaxRatesUpdateResponse>;
}
