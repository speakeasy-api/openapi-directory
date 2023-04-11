import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about as2_outgoing_messages
 */
export declare class As2OutgoingMessages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List As2 Outgoing Messages
     *
     * @remarks
     * List As2 Outgoing Messages
     */
    getAs2OutgoingMessages(req: operations.GetAs2OutgoingMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetAs2OutgoingMessagesResponse>;
}
