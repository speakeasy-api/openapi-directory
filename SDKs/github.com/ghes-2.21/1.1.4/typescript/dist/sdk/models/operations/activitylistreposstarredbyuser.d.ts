import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityListReposStarredByUserRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
     */
    sort?: shared.SortEnum;
    username: string;
}
export declare class ActivityListReposStarredByUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    activityListReposStarredByUser200ApplicationJSONAnyOf?: any;
}
