import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListUsersRequest extends SpeakeasyBase {
    /**
     * Email to search for. Ignored if `username` is provided. Supports wildcard searches
     */
    email?: string;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * Resource identifier for user's home directory. Does not support wildcard searches.
     */
    homeResource?: string;
    /**
     * Comma separated list of relationships to include in response. Valid options are **homeResource** and **ownerAccount**.
     */
    include?: string;
    /**
     * Number of users to return. Can be used for pagination.
     */
    limit?: number;
    /**
     * Nickname to search for. Ignored if `username` is provided. Supports wildcard searches.
     */
    nickname?: string;
    /**
     * Starting user record in the result set. Can be used for pagination.
     */
    offset?: number;
    /**
     * Types of users to include the list. Ignored if `username` is provided. Valid options are **admin**, **master** and **user**
     */
    role?: string;
    /**
     * Searches the nickname, email, role and homeDir fields for the provided value. Ignored if `username` is provided. Supports wildcard searches.
     */
    search?: string;
    /**
     * Sort order or matching users. You can sort by multiple columns by separating sort options with a comma; the sort will be applied in the order specified. The sort order for each sort field is ascending unless it is prefixed with a minus (“-“), in which case it will be descending.
     *
     * @remarks
     *
     * Valid sort fields are: **nickname**, **username**, **email**, **homeDir** and **modified**
     */
    sort?: string;
    /**
     * Whether a user is locked. Ignored if `username` is provided. **0** means user is locked, **1** means user is not locked.
     */
    status?: number;
    /**
     * The username of the user you are looking for. Only entries with the same username as this will be in the list of results. Does not support wildcard searches.
     */
    username?: string;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    userCollectionResponse?: shared.UserCollectionResponse;
}
