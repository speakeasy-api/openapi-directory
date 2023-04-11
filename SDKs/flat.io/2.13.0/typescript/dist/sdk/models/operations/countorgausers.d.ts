import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CountOrgaUsersSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CountOrgaUsersRequest extends SpeakeasyBase {
    /**
     * Filter users by group
     */
    group?: string[];
    /**
     * Filter users who don't have an active license
     */
    noActiveLicense?: boolean;
    /**
     * The query to search
     */
    q?: string;
    /**
     * Filter users by role
     */
    role?: shared.RoleEnum[];
}
export declare class CountOrgaUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Number of users
     */
    countOrgaUsers200ApplicationJSONInteger?: number;
}
