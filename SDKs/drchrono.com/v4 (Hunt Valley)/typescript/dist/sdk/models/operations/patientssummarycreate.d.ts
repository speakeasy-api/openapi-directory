import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsSummaryCreateQueryParams extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsSummaryCreateRequest extends SpeakeasyBase {
    queryParams: PatientsSummaryCreateQueryParams;
    security: PatientsSummaryCreateSecurity;
}
export declare class PatientsSummaryCreateResponse extends SpeakeasyBase {
    contentType: string;
    patient?: shared.Patient;
    statusCode: number;
}
