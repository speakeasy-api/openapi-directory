import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OfficesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class OfficesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class OfficesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Office[];
    next?: string;
    previous?: string;
}
export declare class OfficesListRequest extends SpeakeasyBase {
    queryParams: OfficesListQueryParams;
    security: OfficesListSecurity;
}
export declare class OfficesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    officesList200ApplicationJSONObject?: OfficesList200ApplicationJson;
}
