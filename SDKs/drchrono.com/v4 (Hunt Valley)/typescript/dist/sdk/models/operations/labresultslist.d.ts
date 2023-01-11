import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabResultsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    order?: number;
    pageSize?: number;
}
export declare class LabResultsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class LabResultsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LabResult[];
    next?: string;
    previous?: string;
}
export declare class LabResultsListRequest extends SpeakeasyBase {
    queryParams: LabResultsListQueryParams;
    security: LabResultsListSecurity;
}
export declare class LabResultsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    labResultsList200ApplicationJSONObject?: LabResultsList200ApplicationJson;
}
