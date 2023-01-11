import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientVaccineRecordsCreateQueryParams extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientVaccineRecordsCreateRequest extends SpeakeasyBase {
    queryParams: PatientVaccineRecordsCreateQueryParams;
    security: PatientVaccineRecordsCreateSecurity;
}
export declare class PatientVaccineRecordsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientVaccineRecord?: shared.PatientVaccineRecord;
    statusCode: number;
}
