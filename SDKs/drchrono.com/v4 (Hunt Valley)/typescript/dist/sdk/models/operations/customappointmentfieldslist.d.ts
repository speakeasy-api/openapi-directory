import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomAppointmentFieldsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class CustomAppointmentFieldsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CustomAppointmentFieldsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomAppointmentFieldType[];
    next?: string;
    previous?: string;
}
export declare class CustomAppointmentFieldsListRequest extends SpeakeasyBase {
    queryParams: CustomAppointmentFieldsListQueryParams;
    security: CustomAppointmentFieldsListSecurity;
}
export declare class CustomAppointmentFieldsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    customAppointmentFieldsList200ApplicationJSONObject?: CustomAppointmentFieldsList200ApplicationJson;
}
