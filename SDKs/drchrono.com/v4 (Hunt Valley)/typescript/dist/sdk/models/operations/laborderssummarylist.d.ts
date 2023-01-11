import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersSummaryListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class LabOrdersSummaryListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class LabOrdersSummaryList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LabOrder[];
    next?: string;
    previous?: string;
}
export declare class LabOrdersSummaryListRequest extends SpeakeasyBase {
    queryParams: LabOrdersSummaryListQueryParams;
    security: LabOrdersSummaryListSecurity;
}
export declare class LabOrdersSummaryListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    labOrdersSummaryList200ApplicationJSONObject?: LabOrdersSummaryList200ApplicationJson;
}
