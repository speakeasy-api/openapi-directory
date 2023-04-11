import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestPushAppleProdNotificationsUsingPOSTRequest extends SpeakeasyBase {
    /**
     * messageDetails
     */
    pushNotificationTestModel: shared.PushNotificationTestModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class TestPushAppleProdNotificationsUsingPOSTResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
