import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientLabResultsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientLabResultsCreateRequest extends SpeakeasyBase {
    queryParams: PatientLabResultsCreateQueryParams;
    security: PatientLabResultsCreateSecurity;
}
export declare class PatientLabResultsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientLabResultSet?: shared.PatientLabResultSet;
    statusCode: number;
}
