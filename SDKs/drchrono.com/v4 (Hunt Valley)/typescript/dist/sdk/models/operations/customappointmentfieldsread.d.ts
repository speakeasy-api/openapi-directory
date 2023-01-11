import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomAppointmentFieldsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomAppointmentFieldsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomAppointmentFieldsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomAppointmentFieldsReadRequest extends SpeakeasyBase {
    pathParams: CustomAppointmentFieldsReadPathParams;
    queryParams: CustomAppointmentFieldsReadQueryParams;
    security: CustomAppointmentFieldsReadSecurity;
}
export declare class CustomAppointmentFieldsReadResponse extends SpeakeasyBase {
    contentType: string;
    customAppointmentFieldType?: shared.CustomAppointmentFieldType;
    statusCode: number;
}
