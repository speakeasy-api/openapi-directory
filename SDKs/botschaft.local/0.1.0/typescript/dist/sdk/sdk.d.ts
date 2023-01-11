import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Discord } from "./discord";
import { Slack } from "./slack";
import { Sns } from "./sns";
import { Twilio } from "./twilio";
export declare const ServerList: readonly ["http://botschaft.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
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
    constructor(props: SDKProps);
    /**
     * configConfigGet - Config
    **/
    configConfigGet(req: operations.ConfigConfigGetRequest, config?: AxiosRequestConfig): Promise<operations.ConfigConfigGetResponse>;
    /**
     * topicTopicTopicNameGet - Topic
    **/
    topicTopicTopicNameGet(req: operations.TopicTopicTopicNameGetRequest, config?: AxiosRequestConfig): Promise<operations.TopicTopicTopicNameGetResponse>;
}
