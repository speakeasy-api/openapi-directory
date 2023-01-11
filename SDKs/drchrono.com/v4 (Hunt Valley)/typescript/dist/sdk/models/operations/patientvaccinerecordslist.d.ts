import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientVaccineRecordsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    cvxCode?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientVaccineRecordsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientVaccineRecord[];
    next?: string;
    previous?: string;
}
export declare class PatientVaccineRecordsListRequest extends SpeakeasyBase {
    queryParams: PatientVaccineRecordsListQueryParams;
    security: PatientVaccineRecordsListSecurity;
}
export declare class PatientVaccineRecordsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientVaccineRecordsList200ApplicationJSONObject?: PatientVaccineRecordsList200ApplicationJson;
}
