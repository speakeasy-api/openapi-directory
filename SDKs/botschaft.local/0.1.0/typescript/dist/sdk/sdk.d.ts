import { Discord } from "./discord";
import * as operations from "./models/operations";
import { Slack } from "./slack";
import { Sns } from "./sns";
import { Twilio } from "./twilio";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://botschaft.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    discord: Discord;
    slack: Slack;
    sns: Sns;
    twilio: Twilio;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Config
     */
    configConfigGet(req: operations.ConfigConfigGetRequest, config?: AxiosRequestConfig): Promise<operations.ConfigConfigGetResponse>;
    /**
     * Topic
     */
    topicTopicTopicNameGet(req: operations.TopicTopicTopicNameGetRequest, config?: AxiosRequestConfig): Promise<operations.TopicTopicTopicNameGetResponse>;
}
