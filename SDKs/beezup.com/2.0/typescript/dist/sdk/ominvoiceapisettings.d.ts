import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OmInvoiceApiSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrderInvoiceDesignSettings - Get Order Invoice design settings
    **/
    getOrderInvoiceDesignSettings(config?: AxiosRequestConfig): Promise<operations.GetOrderInvoiceDesignSettingsResponse>;
    /**
     * getOrderInvoiceDesignSettingsPreview - View a preview an Order Invoice using custom design settings
    **/
    getOrderInvoiceDesignSettingsPreview(req: operations.GetOrderInvoiceDesignSettingsPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderInvoiceDesignSettingsPreviewResponse>;
    /**
     * getOrderInvoiceGeneralSettings - Get Order Invoice general settings
    **/
    getOrderInvoiceGeneralSettings(config?: AxiosRequestConfig): Promise<operations.GetOrderInvoiceGeneralSettingsResponse>;
    /**
     * saveOrderInvoiceDesignSettings - Save Order Invoice design settings
    **/
    saveOrderInvoiceDesignSettings(req: operations.SaveOrderInvoiceDesignSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SaveOrderInvoiceDesignSettingsResponse>;
    /**
     * saveOrderInvoiceGeneralSettings - Save Order Invoice general settings
    **/
    saveOrderInvoiceGeneralSettings(req: operations.SaveOrderInvoiceGeneralSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SaveOrderInvoiceGeneralSettingsResponse>;
}
