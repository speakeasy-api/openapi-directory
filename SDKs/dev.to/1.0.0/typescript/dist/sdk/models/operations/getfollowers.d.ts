import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFollowersRequest extends SpeakeasyBase {
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     */
    perPage?: number;
    /**
     * Default is 'created_at'. Specifies the sort order for the created_at param of the follow
     *
     * @remarks
     *                                 relationship. To sort by newest followers first (descending order) specify
     *                                 ?sort=-created_at.
     */
    sort?: string;
}
/**
 * A follower
 */
export declare class GetFollowers200ApplicationJSON extends SpeakeasyBase {
    id?: number;
    /**
     * The follower's name
     */
    name?: string;
    /**
     * A path to the follower's profile
     */
    path?: string;
    /**
     * Profile image (640x640)
     */
    profileImage?: string;
    /**
     * user_follower by default
     */
    typeOf?: string;
    /**
     * The follower's user id
     */
    userId?: number;
}
export declare class GetFollowersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A List of followers
     */
    getFollowers200ApplicationJSONObjects?: GetFollowers200ApplicationJSON[];
}
