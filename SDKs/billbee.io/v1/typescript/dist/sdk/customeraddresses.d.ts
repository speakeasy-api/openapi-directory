import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new customer address
     */
    customerAddressesCreateForm(req: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesCreateFormResponse>;
    /**
     * Creates a new customer address
     */
    customerAddressesCreateJson(req: shared.BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesCreateJsonResponse>;
    /**
     * Creates a new customer address
     */
    customerAddressesCreateRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesCreateRawResponse>;
    /**
     * Get a list of all customer addresses
     */
    customerAddressesGetAll(req: operations.CustomerAddressesGetAllRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesGetAllResponse>;
    /**
     * Queries a single customer address by id
     */
    customerAddressesGetOne(req: operations.CustomerAddressesGetOneRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesGetOneResponse>;
    /**
     * Updates a customer address by id
     */
    customerAddressesUpdateForm(req: operations.CustomerAddressesUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesUpdateFormResponse>;
    /**
     * Updates a customer address by id
     */
    customerAddressesUpdateJson(req: operations.CustomerAddressesUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesUpdateJsonResponse>;
    /**
     * Updates a customer address by id
     */
    customerAddressesUpdateRaw(req: operations.CustomerAddressesUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddressesUpdateRawResponse>;
}
