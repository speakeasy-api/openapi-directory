import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelColumnsPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelColumnsHeaders extends SpeakeasyBase {
    acceptEncoding: string[];
}
export declare class GetChannelColumnsRequest extends SpeakeasyBase {
    pathParams: GetChannelColumnsPathParams;
    headers: GetChannelColumnsHeaders;
    request?: string[];
}
export declare class GetChannelColumnsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    channelColumns?: shared.ChannelColumn[];
}
