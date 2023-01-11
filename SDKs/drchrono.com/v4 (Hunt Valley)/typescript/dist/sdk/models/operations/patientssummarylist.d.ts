import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsSummaryListQueryParams extends SpeakeasyBase {
    cursor?: string;
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    pageSize?: number;
    since?: string;
}
export declare class PatientsSummaryListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientsSummaryList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Patient[];
    next?: string;
    previous?: string;
}
export declare class PatientsSummaryListRequest extends SpeakeasyBase {
    queryParams: PatientsSummaryListQueryParams;
    security: PatientsSummaryListSecurity;
}
export declare class PatientsSummaryListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientsSummaryList200ApplicationJSONObject?: PatientsSummaryList200ApplicationJson;
}
