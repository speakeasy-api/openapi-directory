import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Message
     *
     * @remarks
     * Create Message
     */
    messagesAdd(req: operations.MessagesAddRequest, security: operations.MessagesAddSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesAddResponse>;
    /**
     * List Messages
     *
     * @remarks
     * List Messages
     */
    messagesAll(req: operations.MessagesAllRequest, security: operations.MessagesAllSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesAllResponse>;
    /**
     * Delete Message
     *
     * @remarks
     * Delete Message
     */
    messagesDelete(req: operations.MessagesDeleteRequest, security: operations.MessagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteResponse>;
    /**
     * Get Message
     *
     * @remarks
     * Get Message
     */
    messagesOne(req: operations.MessagesOneRequest, security: operations.MessagesOneSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesOneResponse>;
    /**
     * Update Message
     *
     * @remarks
     * Update Message
     */
    messagesUpdate(req: operations.MessagesUpdateRequest, security: operations.MessagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesUpdateResponse>;
}
