import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SublabsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
}
export declare class SublabsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class SublabsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LabVendorLocation[];
    next?: string;
    previous?: string;
}
export declare class SublabsListRequest extends SpeakeasyBase {
    queryParams: SublabsListQueryParams;
    security: SublabsListSecurity;
}
export declare class SublabsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sublabsList200ApplicationJSONObject?: SublabsList200ApplicationJson;
}
