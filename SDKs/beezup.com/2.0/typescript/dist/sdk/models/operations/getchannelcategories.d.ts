import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCategoriesRequest extends SpeakeasyBase {
    /**
     * Indicates that the client accepts that the response will be compressed to reduce traffic size.
     */
    acceptEncoding: string[];
    /**
     * The channel identifier
     */
    channelId: string;
}
export declare class GetChannelCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel categories
     */
    channelRootCategory?: shared.ChannelRootCategory;
}
