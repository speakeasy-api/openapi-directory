import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentTemplatesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentTemplatesCreateRequest extends SpeakeasyBase {
    queryParams: AppointmentTemplatesCreateQueryParams;
    security: AppointmentTemplatesCreateSecurity;
}
export declare class AppointmentTemplatesCreateResponse extends SpeakeasyBase {
    appointmentTemplate?: shared.AppointmentTemplate;
    contentType: string;
    statusCode: number;
}
