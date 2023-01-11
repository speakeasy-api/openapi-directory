import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentProfilesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentProfilesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class AppointmentProfilesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentProfilesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: AppointmentProfilesPartialUpdatePathParams;
    queryParams: AppointmentProfilesPartialUpdateQueryParams;
    security: AppointmentProfilesPartialUpdateSecurity;
}
export declare class AppointmentProfilesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
