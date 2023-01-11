import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentTemplatesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentTemplatesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    profile?: number;
}
export declare class AppointmentTemplatesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentTemplatesReadRequest extends SpeakeasyBase {
    pathParams: AppointmentTemplatesReadPathParams;
    queryParams: AppointmentTemplatesReadQueryParams;
    security: AppointmentTemplatesReadSecurity;
}
export declare class AppointmentTemplatesReadResponse extends SpeakeasyBase {
    appointmentTemplate?: shared.AppointmentTemplate;
    contentType: string;
    statusCode: number;
}
