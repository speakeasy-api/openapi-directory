import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum SetNotificationLevelRequestBodyNotificationLevelEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class SetNotificationLevelRequestBody extends SpeakeasyBase {
    notificationLevel: SetNotificationLevelRequestBodyNotificationLevelEnum;
}
export declare class SetNotificationLevelRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: SetNotificationLevelRequestBody;
    id: string;
}
/**
 * topic updated
 */
export declare class SetNotificationLevel200ApplicationJSON extends SpeakeasyBase {
    success?: string;
}
export declare class SetNotificationLevelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    setNotificationLevel200ApplicationJSONObject?: SetNotificationLevel200ApplicationJSON;
}
