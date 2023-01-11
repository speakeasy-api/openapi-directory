import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsSummaryReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsSummaryReadQueryParams extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsSummaryReadRequest extends SpeakeasyBase {
    pathParams: PatientsSummaryReadPathParams;
    queryParams: PatientsSummaryReadQueryParams;
    security: PatientsSummaryReadSecurity;
}
export declare class PatientsSummaryReadResponse extends SpeakeasyBase {
    contentType: string;
    patient?: shared.Patient;
    statusCode: number;
}
