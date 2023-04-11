import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMetadataOfChannelRequest extends SpeakeasyBase {
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
export declare class GetMetadataOfChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    channelDetails?: shared.ChannelDetails;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
