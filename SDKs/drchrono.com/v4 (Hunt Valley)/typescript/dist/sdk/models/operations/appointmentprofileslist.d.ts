import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentProfilesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentProfilesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class AppointmentProfilesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.AppointmentProfile[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class AppointmentProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    appointmentProfilesList200ApplicationJSONObject?: AppointmentProfilesList200ApplicationJSON;
}
