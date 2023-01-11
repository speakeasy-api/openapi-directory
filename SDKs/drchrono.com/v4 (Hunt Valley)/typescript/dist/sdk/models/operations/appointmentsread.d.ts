import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentsReadQueryParams extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentsReadRequest extends SpeakeasyBase {
    pathParams: AppointmentsReadPathParams;
    queryParams: AppointmentsReadQueryParams;
    security: AppointmentsReadSecurity;
}
export declare class AppointmentsReadResponse extends SpeakeasyBase {
    appointment?: shared.Appointment;
    contentType: string;
    statusCode: number;
}
