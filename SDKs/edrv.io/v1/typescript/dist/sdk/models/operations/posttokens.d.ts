import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostTokensRequestBodyChannelEnum {
    Physical = "physical",
    Slack = "slack",
    Telegram = "telegram",
    Sms = "sms"
}
/**
 * Include token properties to create here
 */
export declare class PostTokensRequestBody extends SpeakeasyBase {
    active: boolean;
    channel: PostTokensRequestBodyChannelEnum;
    driver: string;
    physicalId: string;
    type?: string;
}
/**
 * Returns a newly created token object
 */
export declare class PostTokens201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class PostTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a newly created token object
     */
    postTokens201ApplicationJSONObject?: PostTokens201ApplicationJSON;
}
