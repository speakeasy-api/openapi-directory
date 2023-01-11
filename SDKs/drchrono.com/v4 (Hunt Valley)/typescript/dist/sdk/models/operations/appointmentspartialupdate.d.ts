import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentsPartialUpdateQueryParams extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: AppointmentsPartialUpdatePathParams;
    queryParams: AppointmentsPartialUpdateQueryParams;
    security: AppointmentsPartialUpdateSecurity;
}
export declare class AppointmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
