import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Comment
     *
     * @remarks
     * Create Comment
     */
    collectionTicketCommentsAdd(req: operations.CollectionTicketCommentsAddRequest, security: operations.CollectionTicketCommentsAddSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketCommentsAddResponse>;
    /**
     * List Comments
     *
     * @remarks
     * List Comments
     */
    collectionTicketCommentsAll(req: operations.CollectionTicketCommentsAllRequest, security: operations.CollectionTicketCommentsAllSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketCommentsAllResponse>;
    /**
     * Delete Comment
     *
     * @remarks
     * Delete Comment
     */
    collectionTicketCommentsDelete(req: operations.CollectionTicketCommentsDeleteRequest, security: operations.CollectionTicketCommentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketCommentsDeleteResponse>;
    /**
     * Get Comment
     *
     * @remarks
     * Get Comment
     */
    collectionTicketCommentsOne(req: operations.CollectionTicketCommentsOneRequest, security: operations.CollectionTicketCommentsOneSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketCommentsOneResponse>;
    /**
     * Update Comment
     *
     * @remarks
     * Update Comment
     */
    collectionTicketCommentsUpdate(req: operations.CollectionTicketCommentsUpdateRequest, security: operations.CollectionTicketCommentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CollectionTicketCommentsUpdateResponse>;
}
