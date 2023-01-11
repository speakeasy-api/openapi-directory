import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelInfoPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelInfoRequest extends SpeakeasyBase {
    pathParams: GetChannelInfoPathParams;
}
export declare class GetChannelInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    channelInfo?: shared.ChannelInfo;
}
