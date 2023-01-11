import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomAppointmentFieldsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomAppointmentFieldsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomAppointmentFieldsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomAppointmentFieldsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CustomAppointmentFieldsPartialUpdatePathParams;
    queryParams: CustomAppointmentFieldsPartialUpdateQueryParams;
    security: CustomAppointmentFieldsPartialUpdateSecurity;
}
export declare class CustomAppointmentFieldsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
