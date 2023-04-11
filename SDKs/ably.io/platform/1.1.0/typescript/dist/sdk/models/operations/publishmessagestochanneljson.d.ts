import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishMessagesToChannelJsonRequest extends SpeakeasyBase {
    messageInput?: shared.MessageInput;
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     */
    channelId: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
/**
 * OK
 */
export declare class PublishMessagesToChannelJson2XXApplicationXMsgpack extends SpeakeasyBase {
    channel?: string;
    messageId?: string;
}
/**
 * OK
 */
export declare class PublishMessagesToChannelJson2XXApplicationJSON extends SpeakeasyBase {
    channel?: string;
    messageId?: string;
}
export declare class PublishMessagesToChannelJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    publishMessagesToChannelJSON2XXApplicationJSONObject?: PublishMessagesToChannelJson2XXApplicationJSON;
}
