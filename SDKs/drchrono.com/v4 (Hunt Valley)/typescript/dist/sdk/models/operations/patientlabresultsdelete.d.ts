import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientLabResultsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientLabResultsDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientLabResultsDeleteRequest extends SpeakeasyBase {
    pathParams: PatientLabResultsDeletePathParams;
    queryParams: PatientLabResultsDeleteQueryParams;
    security: PatientLabResultsDeleteSecurity;
}
export declare class PatientLabResultsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
