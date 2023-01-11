import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabOrdersListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
export declare class LabOrdersListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class LabOrdersList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LabOrder[];
    next?: string;
    previous?: string;
}
export declare class LabOrdersListRequest extends SpeakeasyBase {
    queryParams: LabOrdersListQueryParams;
    security: LabOrdersListSecurity;
}
export declare class LabOrdersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    labOrdersList200ApplicationJSONObject?: LabOrdersList200ApplicationJson;
}
