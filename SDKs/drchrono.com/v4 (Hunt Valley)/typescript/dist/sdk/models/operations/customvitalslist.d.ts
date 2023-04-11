import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomVitalsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class CustomVitalsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class CustomVitalsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CustomVitalType[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class CustomVitalsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    customVitalsList200ApplicationJSONObject?: CustomVitalsList200ApplicationJSON;
}
