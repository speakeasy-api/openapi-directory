import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllergiesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class AllergiesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class AllergiesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientAllergy[];
    next?: string;
    previous?: string;
}
export declare class AllergiesListRequest extends SpeakeasyBase {
    queryParams: AllergiesListQueryParams;
    security: AllergiesListSecurity;
}
export declare class AllergiesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allergiesList200ApplicationJSONObject?: AllergiesList200ApplicationJson;
}
