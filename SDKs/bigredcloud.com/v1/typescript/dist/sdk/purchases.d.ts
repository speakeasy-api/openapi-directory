import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Purchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Purchase.
     */
    purchasesDelete(req: operations.PurchasesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PurchasesDeleteResponse>;
    /**
     * Returns a list of company's Purchases. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    purchasesGet(config?: AxiosRequestConfig): Promise<operations.PurchasesGetResponse>;
    /**
     * Creates a new Purchase.
     */
    purchasesPost(req: shared.PurchaseDto, config?: AxiosRequestConfig): Promise<operations.PurchasesPostResponse>;
    /**
     * Processes a batch of Purchases.
     */
    purchasesProcessBatch(req: shared.BatchItemPurchaseDto[], config?: AxiosRequestConfig): Promise<operations.PurchasesProcessBatchResponse>;
    /**
     * Updates an existing Purchase.
     */
    purchasesPut(req: operations.PurchasesPutRequest, config?: AxiosRequestConfig): Promise<operations.PurchasesPutResponse>;
    /**
     * Returns information about a single Purchases.
     */
    getV1PurchasesId(req: operations.GetV1PurchasesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1PurchasesIdResponse>;
}
