import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsSummaryPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsSummaryPartialUpdateQueryParams extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsSummaryPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientsSummaryPartialUpdatePathParams;
    queryParams: PatientsSummaryPartialUpdateQueryParams;
    security: PatientsSummaryPartialUpdateSecurity;
}
export declare class PatientsSummaryPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
