import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)
 */
export declare enum GetMetadataOfAllChannelsByEnum {
    Value = "value",
    Id = "id"
}
export declare class GetMetadataOfAllChannelsRequest extends SpeakeasyBase {
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)
     */
    by?: GetMetadataOfAllChannelsByEnum;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
    limit?: number;
    /**
     * Optionally limits the query to only those channels whose name starts with the given prefix
     */
    prefix?: string;
}
export declare class GetMetadataOfAllChannelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getMetadataOfAllChannels2XXApplicationJSONOneOf?: any;
    /**
     * OK
     */
    getMetadataOfAllChannels2XXTextHTMLString?: string;
}
