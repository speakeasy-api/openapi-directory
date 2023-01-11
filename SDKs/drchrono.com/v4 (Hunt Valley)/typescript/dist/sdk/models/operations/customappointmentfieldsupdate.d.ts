import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomAppointmentFieldsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomAppointmentFieldsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class CustomAppointmentFieldsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CustomAppointmentFieldsUpdateRequest extends SpeakeasyBase {
    pathParams: CustomAppointmentFieldsUpdatePathParams;
    queryParams: CustomAppointmentFieldsUpdateQueryParams;
    security: CustomAppointmentFieldsUpdateSecurity;
}
export declare class CustomAppointmentFieldsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
