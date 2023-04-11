import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAvailableChannelsRequest extends SpeakeasyBase {
    /**
     * The store identifier
     */
    storeId: string;
}
export declare class GetAvailableChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Available channel list for this store
     */
    channelHeaders?: shared.ChannelHeader[];
}
