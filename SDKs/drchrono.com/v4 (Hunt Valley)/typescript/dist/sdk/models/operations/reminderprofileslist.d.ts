import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReminderProfilesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ReminderProfilesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class ReminderProfilesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.ReminderProfile[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ReminderProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    reminderProfilesList200ApplicationJSONObject?: ReminderProfilesList200ApplicationJSON;
}
