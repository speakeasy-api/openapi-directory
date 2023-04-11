import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tickets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Ticket
     *
     * @remarks
     * Create Ticket
     */
    collectionTicketsAdd(req: operations.CollectionTicketsAddRequest, security: operations.CollectionTicketsAddSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketsAddResponse>;
    /**
     * List Tickets
     *
     * @remarks
     * List Tickets
     */
    collectionTicketsAll(req: operations.CollectionTicketsAllRequest, security: operations.CollectionTicketsAllSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketsAllResponse>;
    /**
     * Delete Ticket
     *
     * @remarks
     * Delete Ticket
     */
    collectionTicketsDelete(req: operations.CollectionTicketsDeleteRequest, security: operations.CollectionTicketsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketsDeleteResponse>;
    /**
     * Get Ticket
     *
     * @remarks
     * Get Ticket
     */
    collectionTicketsOne(req: operations.CollectionTicketsOneRequest, security: operations.CollectionTicketsOneSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketsOneResponse>;
    /**
     * Update Ticket
     *
     * @remarks
     * Update Ticket
     */
    collectionTicketsUpdate(req: operations.CollectionTicketsUpdateRequest, security: operations.CollectionTicketsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketsUpdateResponse>;
}
