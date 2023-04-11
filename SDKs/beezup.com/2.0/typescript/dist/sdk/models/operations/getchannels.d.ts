import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelsRequest extends SpeakeasyBase {
    /**
     * Allows the client to indicate whether it accepts a compressed encoding to reduce traffic size.
     */
    acceptEncoding: string[];
    /**
     * ETag value to identify the last known version of requested resource.\
     *
     * @remarks
     * To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\
     * If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\
     * For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
     *
     */
    ifNoneMatch?: string;
    /**
     * The country iso code alpha 3 based on this: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Decoding_table \
     *
     * @remarks
     * To know which country are available you have to use the operation: GetChannelsByCountry
     *
     */
    countryIsoCode: string;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    /**
     * Channel country not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The channel list for one country
     */
    publicChannelInfoList?: shared.PublicChannelInfoList;
}
