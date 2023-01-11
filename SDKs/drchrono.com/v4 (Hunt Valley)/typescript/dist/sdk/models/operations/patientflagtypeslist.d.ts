import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientFlagTypesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class PatientFlagTypesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientFlagTypesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientFlagType[];
    next?: string;
    previous?: string;
}
export declare class PatientFlagTypesListRequest extends SpeakeasyBase {
    queryParams: PatientFlagTypesListQueryParams;
    security: PatientFlagTypesListSecurity;
}
export declare class PatientFlagTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientFlagTypesList200ApplicationJSONObject?: PatientFlagTypesList200ApplicationJson;
}
