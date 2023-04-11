import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about message_reactions
 */
export declare class MessageReactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Message Reaction
     *
     * @remarks
     * Delete Message Reaction
     */
    deleteMessageReactionsId(req: operations.DeleteMessageReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageReactionsIdResponse>;
    /**
     * List Message Reactions
     *
     * @remarks
     * List Message Reactions
     */
    getMessageReactions(req: operations.GetMessageReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageReactionsResponse>;
    /**
     * Show Message Reaction
     *
     * @remarks
     * Show Message Reaction
     */
    getMessageReactionsId(req: operations.GetMessageReactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageReactionsIdResponse>;
    /**
     * Create Message Reaction
     *
     * @remarks
     * Create Message Reaction
     */
    postMessageReactions(req: operations.PostMessageReactionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostMessageReactionsResponse>;
}
