import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a new address to a customer
     *
     * @remarks
     * Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.
     */
    customerAddCustomerAddressForm(req: operations.CustomerAddCustomerAddressFormRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddCustomerAddressFormResponse>;
    /**
     * Adds a new address to a customer
     *
     * @remarks
     * Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.
     */
    customerAddCustomerAddressJson(req: operations.CustomerAddCustomerAddressJsonRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddCustomerAddressJsonResponse>;
    /**
     * Adds a new address to a customer
     *
     * @remarks
     * Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.
     */
    customerAddCustomerAddressRaw(req: operations.CustomerAddCustomerAddressRawRequest, config?: AxiosRequestConfig): Promise<operations.CustomerAddCustomerAddressRawResponse>;
    /**
     * Creates a new customer
     */
    customerCreateForm(req: shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput, config?: AxiosRequestConfig): Promise<operations.CustomerCreateFormResponse>;
    /**
     * Creates a new customer
     */
    customerCreateJson(req: shared.BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput, config?: AxiosRequestConfig): Promise<operations.CustomerCreateJsonResponse>;
    /**
     * Creates a new customer
     */
    customerCreateRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.CustomerCreateRawResponse>;
    /**
     * Get a list of all customers
     */
    customerGetAll(req: operations.CustomerGetAllRequest, config?: AxiosRequestConfig): Promise<operations.CustomerGetAllResponse>;
    /**
     * Queries a single address from a customer
     */
    customerGetCustomerAddress(req: operations.CustomerGetCustomerAddressRequest, config?: AxiosRequestConfig): Promise<operations.CustomerGetCustomerAddressResponse>;
    /**
     * Queries a list of addresses from a customer
     */
    customerGetCustomerAddresses(req: operations.CustomerGetCustomerAddressesRequest, config?: AxiosRequestConfig): Promise<operations.CustomerGetCustomerAddressesResponse>;
    /**
     * Queries a list of orders from a customer
     */
    customerGetCustomerOrders(req: operations.CustomerGetCustomerOrdersRequest, config?: AxiosRequestConfig): Promise<operations.CustomerGetCustomerOrdersResponse>;
    /**
     * Queries a single customer by id
     */
    customerGetOne(req: operations.CustomerGetOneRequest, config?: AxiosRequestConfig): Promise<operations.CustomerGetOneResponse>;
    /**
     * Updates one or more fields of an address
     *
     * @remarks
     * Id and CustomerId cannot be changed
     */
    customerPatchAddress(req: operations.CustomerPatchAddressRequest, config?: AxiosRequestConfig): Promise<operations.CustomerPatchAddressResponse>;
    /**
     * Updates all fields of an address
     *
     * @remarks
     * Id and CustomerId cannot be changed. Fields you do not send will become empty.
     */
    customerUpdateAddressForm(req: operations.CustomerUpdateAddressFormRequest, config?: AxiosRequestConfig): Promise<operations.CustomerUpdateAddressFormResponse>;
    /**
     * Updates all fields of an address
     *
     * @remarks
     * Id and CustomerId cannot be changed. Fields you do not send will become empty.
     */
    customerUpdateAddressJson(req: operations.CustomerUpdateAddressJsonRequest, config?: AxiosRequestConfig): Promise<operations.CustomerUpdateAddressJsonResponse>;
    /**
     * Updates all fields of an address
     *
     * @remarks
     * Id and CustomerId cannot be changed. Fields you do not send will become empty.
     */
    customerUpdateAddressRaw(req: operations.CustomerUpdateAddressRawRequest, config?: AxiosRequestConfig): Promise<operations.CustomerUpdateAddressRawResponse>;
    /**
     * Updates a customer by id
     */
    customerUpdateForm(req: operations.CustomerUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.CustomerUpdateFormResponse>;
    /**
     * Updates a customer by id
     */
    customerUpdateJson(req: operations.CustomerUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.CustomerUpdateJsonResponse>;
    /**
     * Updates a customer by id
     */
    customerUpdateRaw(req: operations.CustomerUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.CustomerUpdateRawResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchForm(req: shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel, config?: AxiosRequestConfig): Promise<operations.SearchSearchFormResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchJson(req: shared.RechnungsdruckWebAppControllersApiSearchControllerSearchModel, config?: AxiosRequestConfig): Promise<operations.SearchSearchJsonResponse>;
    /**
     * Search for products, customers and orders.
     * Type can be "order", "product" and / or "customer"
     * Term can contains lucene query syntax
     */
    searchSearchRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.SearchSearchRawResponse>;
}
