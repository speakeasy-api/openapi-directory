import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FeeSchedulesListQueryParams extends SpeakeasyBase {
    code?: string;
    codeType?: string;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    payerId?: string;
    since?: string;
}
export declare class FeeSchedulesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class FeeSchedulesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.DoctorFeeSchedule[];
    next?: string;
    previous?: string;
}
export declare class FeeSchedulesListRequest extends SpeakeasyBase {
    queryParams: FeeSchedulesListQueryParams;
    security: FeeSchedulesListSecurity;
}
export declare class FeeSchedulesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    feeSchedulesList200ApplicationJSONObject?: FeeSchedulesList200ApplicationJson;
}
