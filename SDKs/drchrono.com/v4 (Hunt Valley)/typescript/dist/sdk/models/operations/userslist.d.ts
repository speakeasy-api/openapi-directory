import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class UsersListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class UsersList200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserProfile[];
    next?: string;
    previous?: string;
}
export declare class UsersListRequest extends SpeakeasyBase {
    queryParams: UsersListQueryParams;
    security: UsersListSecurity;
}
export declare class UsersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usersList200ApplicationJSONObject?: UsersList200ApplicationJson;
}
