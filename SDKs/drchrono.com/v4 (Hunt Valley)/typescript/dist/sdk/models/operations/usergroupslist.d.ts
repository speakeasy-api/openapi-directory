import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserGroupsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class UserGroupsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class UserGroupsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.UserProfilesGroup[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class UserGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    userGroupsList200ApplicationJSONObject?: UserGroupsList200ApplicationJSON;
}
