import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsListQueryParams extends SpeakeasyBase {
    chartId?: string;
    cursor?: string;
    dateOfBirth?: string;
    doctor?: number;
    email?: string;
    ethnicity?: string;
    firstName?: string;
    gender?: string;
    lastName?: string;
    pageSize?: number;
    preferredLanguage?: string;
    race?: string;
    since?: string;
}
export declare class PatientsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Patient[];
    next?: string;
    previous?: string;
}
export declare class PatientsListRequest extends SpeakeasyBase {
    queryParams: PatientsListQueryParams;
    security: PatientsListSecurity;
}
export declare class PatientsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientsList200ApplicationJSONObject?: PatientsList200ApplicationJson;
}
