import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentsCreateQueryParams extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentsCreateRequest extends SpeakeasyBase {
    queryParams: AppointmentsCreateQueryParams;
    security: AppointmentsCreateSecurity;
}
export declare class AppointmentsCreateResponse extends SpeakeasyBase {
    appointment?: shared.Appointment;
    contentType: string;
    statusCode: number;
}
