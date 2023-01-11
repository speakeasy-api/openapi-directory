import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientVaccineRecordsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientVaccineRecordsUpdateQueryParams extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientVaccineRecordsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientVaccineRecordsUpdatePathParams;
    queryParams: PatientVaccineRecordsUpdateQueryParams;
    security: PatientVaccineRecordsUpdateSecurity;
}
export declare class PatientVaccineRecordsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
