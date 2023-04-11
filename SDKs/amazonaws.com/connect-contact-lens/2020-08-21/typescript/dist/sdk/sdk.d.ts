import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://contact-lens.{region}.amazonaws.com", "https://contact-lens.{region}.amazonaws.com", "http://contact-lens.{region}.amazonaws.com.cn", "https://contact-lens.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/contact-lens/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Provides a list of analysis segments for a real-time analysis session.
     */
    listRealtimeContactAnalysisSegments(req: operations.ListRealtimeContactAnalysisSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListRealtimeContactAnalysisSegmentsResponse>;
}
