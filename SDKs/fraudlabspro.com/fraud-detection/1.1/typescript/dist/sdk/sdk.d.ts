import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.fraudlabspro.com", "https://virtserver.swaggerhub.com/fraudlabspro/fraudlabspro/1.0"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * postV1OrderFeedback - Feedback the status of an order transaction.
    **/
    postV1OrderFeedback(req: operations.PostV1OrderFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PostV1OrderFeedbackResponse>;
    /**
     * postV1OrderScreen - Screen order for payment fraud.
    **/
    postV1OrderScreen(req: operations.PostV1OrderScreenRequest, config?: AxiosRequestConfig): Promise<operations.PostV1OrderScreenResponse>;
}
