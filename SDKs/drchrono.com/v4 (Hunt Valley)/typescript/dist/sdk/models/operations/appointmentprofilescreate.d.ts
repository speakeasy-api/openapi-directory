import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentProfilesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class AppointmentProfilesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentProfilesCreateRequest extends SpeakeasyBase {
    queryParams: AppointmentProfilesCreateQueryParams;
    security: AppointmentProfilesCreateSecurity;
}
export declare class AppointmentProfilesCreateResponse extends SpeakeasyBase {
    appointmentProfile?: shared.AppointmentProfile;
    contentType: string;
    statusCode: number;
}
