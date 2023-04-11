import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about external_events
 */
export declare class ExternalEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List External Events
     *
     * @remarks
     * List External Events
     */
    getExternalEvents(req: operations.GetExternalEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetExternalEventsResponse>;
    /**
     * Show External Event
     *
     * @remarks
     * Show External Event
     */
    getExternalEventsId(req: operations.GetExternalEventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetExternalEventsIdResponse>;
    /**
     * Create External Event
     *
     * @remarks
     * Create External Event
     */
    postExternalEvents(req: operations.PostExternalEventsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostExternalEventsResponse>;
}
