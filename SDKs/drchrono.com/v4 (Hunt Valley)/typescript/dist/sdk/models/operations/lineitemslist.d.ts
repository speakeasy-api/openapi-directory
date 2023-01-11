import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineItemsListQueryParams extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class LineItemsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.BillingLineItem[];
    next?: string;
    previous?: string;
}
export declare class LineItemsListRequest extends SpeakeasyBase {
    queryParams: LineItemsListQueryParams;
    security: LineItemsListSecurity;
}
export declare class LineItemsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lineItemsList200ApplicationJSONObject?: LineItemsList200ApplicationJson;
}
