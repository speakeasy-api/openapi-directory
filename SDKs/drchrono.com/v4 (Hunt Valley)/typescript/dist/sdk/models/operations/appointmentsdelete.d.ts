import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppointmentsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppointmentsDeleteQueryParams extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
    status?: string;
}
export declare class AppointmentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AppointmentsDeleteRequest extends SpeakeasyBase {
    pathParams: AppointmentsDeletePathParams;
    queryParams: AppointmentsDeleteQueryParams;
    security: AppointmentsDeleteSecurity;
}
export declare class AppointmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
