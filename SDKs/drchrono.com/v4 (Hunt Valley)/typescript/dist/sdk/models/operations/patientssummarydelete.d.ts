import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsSummaryDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsSummaryDeleteQueryParams extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsSummaryDeleteRequest extends SpeakeasyBase {
    pathParams: PatientsSummaryDeletePathParams;
    queryParams: PatientsSummaryDeleteQueryParams;
    security: PatientsSummaryDeleteSecurity;
}
export declare class PatientsSummaryDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
