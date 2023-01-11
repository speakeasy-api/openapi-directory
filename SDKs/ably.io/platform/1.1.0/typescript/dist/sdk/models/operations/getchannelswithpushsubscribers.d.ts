import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelsWithPushSubscribersQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class GetChannelsWithPushSubscribersHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetChannelsWithPushSubscribersRequest extends SpeakeasyBase {
    queryParams: GetChannelsWithPushSubscribersQueryParams;
    headers: GetChannelsWithPushSubscribersHeaders;
}
export declare class GetChannelsWithPushSubscribersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getChannelsWithPushSubscribers2XXApplicationJSONStrings?: string[];
}
