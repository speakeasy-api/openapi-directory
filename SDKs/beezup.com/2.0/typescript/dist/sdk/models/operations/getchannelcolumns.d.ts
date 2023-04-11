import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelColumnsRequest extends SpeakeasyBase {
    /**
     * Indicates that the client accepts that the response will be compressed to reduce traffic size.
     */
    acceptEncoding: string[];
    /**
     * Allow you to filter the channel column identifier list your want to get
     */
    requestBody?: string[];
    /**
     * The channel identifier
     */
    channelId: string;
}
export declare class GetChannelColumnsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel columns
     */
    channelColumns?: shared.ChannelColumn[];
}
