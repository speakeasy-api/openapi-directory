import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentProfilesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentProfilesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class AppointmentProfilesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentProfilesUpdateRequest extends SpeakeasyBase {
    pathParams: AppointmentProfilesUpdatePathParams;
    queryParams: AppointmentProfilesUpdateQueryParams;
    security: AppointmentProfilesUpdateSecurity;
}
export declare class AppointmentProfilesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
