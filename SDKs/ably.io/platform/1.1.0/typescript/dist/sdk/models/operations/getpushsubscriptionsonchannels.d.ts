import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPushSubscriptionsOnChannelsQueryParams extends SpeakeasyBase {
    channel?: string;
    clientId?: string;
    deviceId?: string;
    format?: shared.ResponseFormatEnum;
    limit?: number;
}
export declare class GetPushSubscriptionsOnChannelsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetPushSubscriptionsOnChannelsRequest extends SpeakeasyBase {
    queryParams: GetPushSubscriptionsOnChannelsQueryParams;
    headers: GetPushSubscriptionsOnChannelsHeaders;
}
export declare class GetPushSubscriptionsOnChannelsResponseOutput extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deviceDetails?: shared.DeviceDetailsOutput;
    error?: shared.ErrorT;
    statusCode: number;
}
