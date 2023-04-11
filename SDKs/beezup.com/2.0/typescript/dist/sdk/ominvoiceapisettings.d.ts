import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OMInvoiceAPISettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Order Invoice design settings
     */
    getOrderInvoiceDesignSettings(config?: AxiosRequestConfig): Promise<operations.GetOrderInvoiceDesignSettingsResponse>;
    /**
     * View a preview an Order Invoice using custom design settings
     */
    getOrderInvoiceDesignSettingsPreview(req: operations.GetOrderInvoiceDesignSettingsPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderInvoiceDesignSettingsPreviewResponse>;
    /**
     * Get Order Invoice general settings
     */
    getOrderInvoiceGeneralSettings(config?: AxiosRequestConfig): Promise<operations.GetOrderInvoiceGeneralSettingsResponse>;
    /**
     * Save Order Invoice design settings
     */
    saveOrderInvoiceDesignSettings(req: shared.OrderInvoiceDesignSettings, config?: AxiosRequestConfig): Promise<operations.SaveOrderInvoiceDesignSettingsResponse>;
    /**
     * Save Order Invoice general settings
     */
    saveOrderInvoiceGeneralSettings(req: shared.OrderInvoiceGeneralSettings, config?: AxiosRequestConfig): Promise<operations.SaveOrderInvoiceGeneralSettingsResponse>;
}
