import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebHookManagementDeleteAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    webHookManagementDeleteAll200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    webHookManagementDeleteAll200TextJSONObject?: Record<string, any>;
}
