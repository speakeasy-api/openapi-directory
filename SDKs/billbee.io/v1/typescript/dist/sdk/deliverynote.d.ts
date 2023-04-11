import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DeliveryNote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
     */
    orderApiCreateDeliveryNote(req: operations.OrderApiCreateDeliveryNoteRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiCreateDeliveryNoteResponse>;
}
