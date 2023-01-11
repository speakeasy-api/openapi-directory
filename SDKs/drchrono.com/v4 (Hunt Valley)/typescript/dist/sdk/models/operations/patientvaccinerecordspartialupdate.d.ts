import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientVaccineRecordsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientVaccineRecordsPartialUpdateQueryParams extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientVaccineRecordsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientVaccineRecordsPartialUpdatePathParams;
    queryParams: PatientVaccineRecordsPartialUpdateQueryParams;
    security: PatientVaccineRecordsPartialUpdateSecurity;
}
export declare class PatientVaccineRecordsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
