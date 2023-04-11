import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOrganizationUsersSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ListOrganizationUsersRequest extends SpeakeasyBase {
    /**
     * Sort direction
     */
    direction?: shared.SortDirectionEnum;
    /**
     * Filter users by group
     */
    group?: string[];
    /**
     * Filter users by license expiration date or `active` / `notActive`
     */
    licenseExpirationDate?: string[];
    /**
     * This is the maximum number of objects that may be returned
     */
    limit?: number;
    /**
     * An opaque string cursor to fetch the next page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    next?: string;
    /**
     * Filter users who don't have an active license
     */
    noActiveLicense?: boolean;
    /**
     * Return only user ids
     */
    onlyIds?: boolean;
    /**
     * An opaque string cursor to fetch the previous page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    previous?: string;
    /**
     * The query to search
     */
    q?: string;
    /**
     * Filter users by role
     */
    role?: shared.RoleEnum[];
    /**
     * The order to sort the user list
     */
    sort?: string;
}
export declare class ListOrganizationUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of users
     */
    userDetailsAdmins?: shared.UserDetailsAdmin[];
}
