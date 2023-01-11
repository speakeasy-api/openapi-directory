import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentsUpdateQueryParams extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentsUpdateRequest extends SpeakeasyBase {
    pathParams: AppointmentsUpdatePathParams;
    queryParams: AppointmentsUpdateQueryParams;
    security: AppointmentsUpdateSecurity;
}
export declare class AppointmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
