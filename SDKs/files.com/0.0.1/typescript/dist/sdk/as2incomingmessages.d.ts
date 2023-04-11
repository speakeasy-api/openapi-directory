import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about as2_incoming_messages
 */
export declare class As2IncomingMessages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List As2 Incoming Messages
     *
     * @remarks
     * List As2 Incoming Messages
     */
    getAs2IncomingMessages(req: operations.GetAs2IncomingMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2IncomingMessagesResponse>;
}
