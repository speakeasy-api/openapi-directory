import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Suppliers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Supplier.
     */
    suppliersDelete(req: operations.SuppliersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersDeleteResponse>;
    /**
     * Returns a list of company's Suppliers. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "code" fields.
     */
    suppliersGet(config?: AxiosRequestConfig): Promise<operations.SuppliersGetResponse>;
    /**
     * Returns a list of Supplier's account transactions.
     */
    suppliersGetAccountTrans(req: operations.SuppliersGetAccountTransRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersGetAccountTransResponse>;
    /**
     * Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
     */
    suppliersGetOpeningBalance(req: operations.SuppliersGetOpeningBalanceRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersGetOpeningBalanceResponse>;
    /**
     * Returns a list of Supplier's opening balance transactions.
     */
    suppliersGetOpeningBalanceList(req: operations.SuppliersGetOpeningBalanceListRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersGetOpeningBalanceListResponse>;
    /**
     * Creates a new Supplier.
     */
    suppliersPost(req: shared.SupplierDto, config?: AxiosRequestConfig): Promise<operations.SuppliersPostResponse>;
    /**
     * Processes a batch of Suppliers.
     */
    suppliersProcessBatch(req: shared.BatchItemSupplierDto[], config?: AxiosRequestConfig): Promise<operations.SuppliersProcessBatchResponse>;
    /**
     * Updates an existing Supplier.
     */
    suppliersPut(req: operations.SuppliersPutRequest, config?: AxiosRequestConfig): Promise<operations.SuppliersPutResponse>;
    /**
     * Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.
     */
    getV1SuppliersId(req: operations.GetV1SuppliersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SuppliersIdResponse>;
}
