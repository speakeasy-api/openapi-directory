import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentsListQueryParams extends SpeakeasyBase {
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
export declare class AppointmentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class AppointmentsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Appointment[];
    next?: string;
    previous?: string;
}
export declare class AppointmentsListRequest extends SpeakeasyBase {
    queryParams: AppointmentsListQueryParams;
    security: AppointmentsListSecurity;
}
export declare class AppointmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appointmentsList200ApplicationJSONObject?: AppointmentsList200ApplicationJson;
}
