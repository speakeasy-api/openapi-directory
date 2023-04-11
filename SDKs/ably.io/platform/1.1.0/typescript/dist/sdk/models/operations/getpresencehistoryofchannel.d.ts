import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPresenceHistoryOfChannelRequest extends SpeakeasyBase {
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
export declare class GetPresenceHistoryOfChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    presenceMessages?: shared.PresenceMessage[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getPresenceHistoryOfChannel2XXTextHTMLString?: string;
}
