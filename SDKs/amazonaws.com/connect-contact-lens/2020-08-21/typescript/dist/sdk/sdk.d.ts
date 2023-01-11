import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://contact-lens.{region}.amazonaws.com", "https://contact-lens.{region}.amazonaws.com", "http://contact-lens.{region}.amazonaws.com.cn", "https://contact-lens.{region}.amazonaws.com.cn"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
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
     * listRealtimeContactAnalysisSegments - Provides a list of analysis segments for a real-time analysis session.
    **/
    listRealtimeContactAnalysisSegments(req: operations.ListRealtimeContactAnalysisSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListRealtimeContactAnalysisSegmentsResponse>;
}
