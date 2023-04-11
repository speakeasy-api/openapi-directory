import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about messages
 */
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Message
     *
     * @remarks
     * Delete Message
     */
    deleteMessagesId(req: operations.DeleteMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessagesIdResponse>;
    /**
     * List Messages
     *
     * @remarks
     * List Messages
     */
    getMessages(req: operations.GetMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesResponse>;
    /**
     * Show Message
     *
     * @remarks
     * Show Message
     */
    getMessagesId(req: operations.GetMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessagesIdResponse>;
    /**
     * Update Message
     *
     * @remarks
     * Update Message
     */
    patchMessagesId(req: operations.PatchMessagesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchMessagesIdResponse>;
    /**
     * Create Message
     *
     * @remarks
     * Create Message
     */
    postMessages(req: operations.PostMessagesRequestBody, config?: AxiosRequestConfig): Promise<operations.PostMessagesResponse>;
}
