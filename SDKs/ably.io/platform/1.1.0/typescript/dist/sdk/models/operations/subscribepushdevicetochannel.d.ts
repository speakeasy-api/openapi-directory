import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribePushDeviceToChannelQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class SubscribePushDeviceToChannelHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class SubscribePushDeviceToChannelApplicationJson1 extends SpeakeasyBase {
    channel?: string;
    deviceId?: string;
}
export declare class SubscribePushDeviceToChannelApplicationJson2 extends SpeakeasyBase {
    channel?: string;
    clientId?: string;
}
export declare class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded1 extends SpeakeasyBase {
    channel?: string;
    deviceId?: string;
}
export declare class SubscribePushDeviceToChannelApplicationXWwwFormUrlencoded2 extends SpeakeasyBase {
    channel?: string;
    clientId?: string;
}
export declare class SubscribePushDeviceToChannelRequests extends SpeakeasyBase {
    applicationXMsgpack: Uint8Array;
    oneOf?: any;
    oneOf1?: any;
}
export declare class SubscribePushDeviceToChannelRequest extends SpeakeasyBase {
    queryParams: SubscribePushDeviceToChannelQueryParams;
    headers: SubscribePushDeviceToChannelHeaders;
    request?: SubscribePushDeviceToChannelRequests;
}
export declare class SubscribePushDeviceToChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
