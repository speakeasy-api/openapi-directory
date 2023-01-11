import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentProfilesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class AppointmentProfilesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class AppointmentProfilesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.AppointmentProfile[];
    next?: string;
    previous?: string;
}
export declare class AppointmentProfilesListRequest extends SpeakeasyBase {
    queryParams: AppointmentProfilesListQueryParams;
    security: AppointmentProfilesListSecurity;
}
export declare class AppointmentProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appointmentProfilesList200ApplicationJSONObject?: AppointmentProfilesList200ApplicationJson;
}
