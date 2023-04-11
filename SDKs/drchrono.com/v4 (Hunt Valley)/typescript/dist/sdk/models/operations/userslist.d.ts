import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class UsersListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class UsersList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.UserProfile[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class UsersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    usersList200ApplicationJSONObject?: UsersList200ApplicationJSON;
}
