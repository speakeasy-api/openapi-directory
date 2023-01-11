import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientLabResultsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    orderingDoctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientLabResultsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientLabResultSet[];
    next?: string;
    previous?: string;
}
export declare class PatientLabResultsListRequest extends SpeakeasyBase {
    queryParams: PatientLabResultsListQueryParams;
    security: PatientLabResultsListSecurity;
}
export declare class PatientLabResultsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientLabResultsList200ApplicationJSONObject?: PatientLabResultsList200ApplicationJson;
}
