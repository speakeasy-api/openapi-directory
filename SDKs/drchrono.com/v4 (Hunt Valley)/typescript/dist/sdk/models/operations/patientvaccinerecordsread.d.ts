import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientVaccineRecordsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientVaccineRecordsReadQueryParams extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientVaccineRecordsReadRequest extends SpeakeasyBase {
    pathParams: PatientVaccineRecordsReadPathParams;
    queryParams: PatientVaccineRecordsReadQueryParams;
    security: PatientVaccineRecordsReadSecurity;
}
export declare class PatientVaccineRecordsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientVaccineRecord?: shared.PatientVaccineRecord;
    statusCode: number;
}
