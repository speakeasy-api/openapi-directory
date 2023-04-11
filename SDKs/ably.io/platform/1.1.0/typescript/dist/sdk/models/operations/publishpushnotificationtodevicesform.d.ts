import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded extends SpeakeasyBase {
    push?: shared.Push;
    /**
     * Push recipient details for a device.
     */
    recipient: shared.Recipient;
}
export declare class PublishPushNotificationToDevicesFormRequest extends SpeakeasyBase {
    requestBody?: PublishPushNotificationToDevicesApplicationXWwwFormUrlencoded;
    /**
     * The version of the API you wish to use.
     */
    xAblyVersion?: string;
    /**
     * The response format you would like
     */
    format?: shared.ResponseFormatEnum;
}
export declare class PublishPushNotificationToDevicesFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
