import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessagesByChannelRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     */
    channelId: string;
    direction?: shared.FilterDirectionEnum;
    end?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
    limit?: number;
    start?: string;
}
export declare class GetMessagesByChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    messages?: shared.Message[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getMessagesByChannel2XXTextHTMLString?: string;
}
