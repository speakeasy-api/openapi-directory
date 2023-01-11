import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillingProfilesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class BillingProfilesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class BillingProfilesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.BillingProfile[];
    next?: string;
    previous?: string;
}
export declare class BillingProfilesListRequest extends SpeakeasyBase {
    queryParams: BillingProfilesListQueryParams;
    security: BillingProfilesListSecurity;
}
export declare class BillingProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    billingProfilesList200ApplicationJSONObject?: BillingProfilesList200ApplicationJson;
}
