import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommLogsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class CommLogsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CommLogsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PhoneCallLog[];
    next?: string;
    previous?: string;
}
export declare class CommLogsListRequest extends SpeakeasyBase {
    queryParams: CommLogsListQueryParams;
    security: CommLogsListSecurity;
}
export declare class CommLogsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    commLogsList200ApplicationJSONObject?: CommLogsList200ApplicationJson;
}
