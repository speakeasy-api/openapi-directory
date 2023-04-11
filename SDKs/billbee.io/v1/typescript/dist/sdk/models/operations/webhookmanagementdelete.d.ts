import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebHookManagementDeleteRequest extends SpeakeasyBase {
    /**
     * The WebHook ID.
     */
    id: string;
}
export declare class WebHookManagementDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    webHookManagementDelete200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    webHookManagementDelete200TextJSONObject?: Record<string, any>;
}
