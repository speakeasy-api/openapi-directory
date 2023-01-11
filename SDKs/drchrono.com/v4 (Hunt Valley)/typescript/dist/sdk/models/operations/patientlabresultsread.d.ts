import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientLabResultsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientLabResultsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientLabResultsReadRequest extends SpeakeasyBase {
    pathParams: PatientLabResultsReadPathParams;
    queryParams: PatientLabResultsReadQueryParams;
    security: PatientLabResultsReadSecurity;
}
export declare class PatientLabResultsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientLabResultSet?: shared.PatientLabResultSet;
    statusCode: number;
}
