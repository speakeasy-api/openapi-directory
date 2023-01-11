import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsSummaryUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsSummaryUpdateQueryParams extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsSummaryUpdateRequest extends SpeakeasyBase {
    pathParams: PatientsSummaryUpdatePathParams;
    queryParams: PatientsSummaryUpdateQueryParams;
    security: PatientsSummaryUpdateSecurity;
}
export declare class PatientsSummaryUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
