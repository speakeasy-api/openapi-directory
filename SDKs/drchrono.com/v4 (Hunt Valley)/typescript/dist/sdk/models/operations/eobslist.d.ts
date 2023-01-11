import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EobsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class EobsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class EobsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.EobObject[];
    next?: string;
    previous?: string;
}
export declare class EobsListRequest extends SpeakeasyBase {
    queryParams: EobsListQueryParams;
    security: EobsListSecurity;
}
export declare class EobsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eobsList200ApplicationJSONObject?: EobsList200ApplicationJson;
}
