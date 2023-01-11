import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReminderProfilesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class ReminderProfilesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ReminderProfilesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.ReminderProfile[];
    next?: string;
    previous?: string;
}
export declare class ReminderProfilesListRequest extends SpeakeasyBase {
    queryParams: ReminderProfilesListQueryParams;
    security: ReminderProfilesListSecurity;
}
export declare class ReminderProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reminderProfilesList200ApplicationJSONObject?: ReminderProfilesList200ApplicationJson;
}
