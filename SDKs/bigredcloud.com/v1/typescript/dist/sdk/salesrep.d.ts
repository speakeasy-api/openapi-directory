import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SalesRep {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Sale Rep.
     */
    salesRepDelete(req: operations.SalesRepDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesRepDeleteResponse>;
    /**
     * Returns a list of company's SaleRep.
     * Filtering is forbidden.
     * Ordering is allowed by "id".
     */
    salesRepGet(config?: AxiosRequestConfig): Promise<operations.SalesRepGetResponse>;
    /**
     * Creates a new SaleRep.
     */
    salesRepPost(req: shared.SaleRepsDto, config?: AxiosRequestConfig): Promise<operations.SalesRepPostResponse>;
    /**
     * Processes a batch of Sale Rep.
     */
    salesRepProcessBatch(req: shared.BatchItemSaleRepsDto[], config?: AxiosRequestConfig): Promise<operations.SalesRepProcessBatchResponse>;
    /**
     * Updates an existing Sale Rep.
     */
    salesRepPut(req: operations.SalesRepPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesRepPutResponse>;
    /**
     * Returns information about a single SaleRep.
     */
    getV1SalesRepsId(req: operations.GetV1SalesRepsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesRepsIdResponse>;
}
