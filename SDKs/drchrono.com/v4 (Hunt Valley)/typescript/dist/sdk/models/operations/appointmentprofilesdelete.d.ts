import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentProfilesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentProfilesDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class AppointmentProfilesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentProfilesDeleteRequest extends SpeakeasyBase {
    pathParams: AppointmentProfilesDeletePathParams;
    queryParams: AppointmentProfilesDeleteQueryParams;
    security: AppointmentProfilesDeleteSecurity;
}
export declare class AppointmentProfilesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
