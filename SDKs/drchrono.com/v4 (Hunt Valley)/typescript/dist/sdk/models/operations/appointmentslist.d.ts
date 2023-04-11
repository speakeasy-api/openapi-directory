import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppointmentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AppointmentsListRequest extends SpeakeasyBase {
    cursor?: string;
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
    status?: string;
}
/**
 * Paginated Result
 */
export declare class AppointmentsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Appointment[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class AppointmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    appointmentsList200ApplicationJSONObject?: AppointmentsList200ApplicationJSON;
}
