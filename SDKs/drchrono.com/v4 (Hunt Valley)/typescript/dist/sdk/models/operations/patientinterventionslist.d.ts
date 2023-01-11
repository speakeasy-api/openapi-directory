import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientInterventionsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class PatientInterventionsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientInterventionsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientIntervention[];
    next?: string;
    previous?: string;
}
export declare class PatientInterventionsListRequest extends SpeakeasyBase {
    queryParams: PatientInterventionsListQueryParams;
    security: PatientInterventionsListSecurity;
}
export declare class PatientInterventionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientInterventionsList200ApplicationJSONObject?: PatientInterventionsList200ApplicationJson;
}
