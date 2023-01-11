import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentTemplatesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    profile?: number;
}
export declare class AppointmentTemplatesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class AppointmentTemplatesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.AppointmentTemplate[];
    next?: string;
    previous?: string;
}
export declare class AppointmentTemplatesListRequest extends SpeakeasyBase {
    queryParams: AppointmentTemplatesListQueryParams;
    security: AppointmentTemplatesListSecurity;
}
export declare class AppointmentTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appointmentTemplatesList200ApplicationJSONObject?: AppointmentTemplatesList200ApplicationJson;
}
