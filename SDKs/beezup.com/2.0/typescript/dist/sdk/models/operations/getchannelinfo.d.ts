import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelInfoRequest extends SpeakeasyBase {
    /**
     * The channel identifier
     */
    channelId: string;
}
export declare class GetChannelInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel information
     */
    channelInfo?: shared.ChannelInfo;
}
