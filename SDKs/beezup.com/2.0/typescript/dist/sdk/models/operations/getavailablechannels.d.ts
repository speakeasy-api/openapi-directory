import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableChannelsQueryParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetAvailableChannelsRequest extends SpeakeasyBase {
    queryParams: GetAvailableChannelsQueryParams;
}
export declare class GetAvailableChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channelHeaders?: shared.ChannelHeader[];
}
