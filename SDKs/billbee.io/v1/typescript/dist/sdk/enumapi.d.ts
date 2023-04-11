import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EnumApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list with all defined orderstates
     */
    enumApiGetOrderStates(config?: AxiosRequestConfig): Promise<operations.EnumApiGetOrderStatesResponse>;
    /**
     * Returns a list with all defined paymenttypes
     */
    enumApiGetPaymentTypes(config?: AxiosRequestConfig): Promise<operations.EnumApiGetPaymentTypesResponse>;
    /**
     * Returns a list with all defined shipmenttypes
     */
    enumApiGetShipmentTypes(config?: AxiosRequestConfig): Promise<operations.EnumApiGetShipmentTypesResponse>;
    /**
     * Returns a list with all defined shippingcarriers
     */
    enumApiGetShippingCarriers(config?: AxiosRequestConfig): Promise<operations.EnumApiGetShippingCarriersResponse>;
}
