import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentProfilesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentProfilesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class AppointmentProfilesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentProfilesReadRequest extends SpeakeasyBase {
    pathParams: AppointmentProfilesReadPathParams;
    queryParams: AppointmentProfilesReadQueryParams;
    security: AppointmentProfilesReadSecurity;
}
export declare class AppointmentProfilesReadResponse extends SpeakeasyBase {
    appointmentProfile?: shared.AppointmentProfile;
    contentType: string;
    statusCode: number;
}
