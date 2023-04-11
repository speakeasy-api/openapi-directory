import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPresenceOfChannelRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     */
    channelId: string;
    clientId?: string;
    connectionId?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
    limit?: number;
}
export declare class GetPresenceOfChannelResponse extends SpeakeasyBase {
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
    getPresenceOfChannel200TextHTMLString?: string;
}
