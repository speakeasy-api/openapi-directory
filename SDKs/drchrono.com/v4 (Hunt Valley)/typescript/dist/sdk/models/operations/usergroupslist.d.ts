import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserGroupsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class UserGroupsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class UserGroupsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserProfilesGroup[];
    next?: string;
    previous?: string;
}
export declare class UserGroupsListRequest extends SpeakeasyBase {
    queryParams: UserGroupsListQueryParams;
    security: UserGroupsListSecurity;
}
export declare class UserGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userGroupsList200ApplicationJSONObject?: UserGroupsList200ApplicationJson;
}
