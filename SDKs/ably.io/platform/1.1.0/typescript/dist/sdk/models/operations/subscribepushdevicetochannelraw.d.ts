import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubscribePushDeviceToChannelApplicationXMsgpack2 extends SpeakeasyBase {
    /**
     * Channel name.
     */
    channel?: string;
    /**
     * Must be set when deviceId is empty, cannot be used with deviceId.
     */
    clientId?: string;
}
export declare class SubscribePushDeviceToChannelApplicationXMsgpack1 extends SpeakeasyBase {
    /**
     * Channel name.
     */
    channel?: string;
    /**
     * Must be set when clientId is empty, cannot be used with clientId.
     */
    deviceId?: string;
}
export declare class SubscribePushDeviceToChannelRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
export declare class SubscribePushDeviceToChannelRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
