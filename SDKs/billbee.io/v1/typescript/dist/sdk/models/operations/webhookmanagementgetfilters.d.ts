import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebHookManagementGetFiltersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    webHookManagementGetFilters200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    webHookManagementGetFilters200TextJSONObject?: Record<string, any>;
}
