import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomAppointmentFieldsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomAppointmentFieldsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomAppointmentFieldsCreateRequest extends SpeakeasyBase {
    queryParams: CustomAppointmentFieldsCreateQueryParams;
    security: CustomAppointmentFieldsCreateSecurity;
}
export declare class CustomAppointmentFieldsCreateResponse extends SpeakeasyBase {
    contentType: string;
    customAppointmentFieldType?: shared.CustomAppointmentFieldType;
    statusCode: number;
}
