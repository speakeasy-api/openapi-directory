import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTokensRequest extends SpeakeasyBase {
    /**
     * Date as ISO String
     */
    createdAtDollarGte?: Date;
    /**
     * Date as ISO String
     */
    createdAtDollarLte?: Date;
    /**
     * Populate driver
     */
    includeDriver?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Enable pagination
     */
    paginateEnabled?: boolean;
    /**
     * Number of results per page
     */
    paginateLimit?: number;
    /**
     * The queried page index
     */
    paginatePage?: string;
    /**
     * Sort data by this key
     */
    sortBy?: string;
    /**
     * asc to sort ascending (default is desc - descending)
     */
    sortOrder?: shared.SortOrder1Enum;
    /**
     * Date as ISO String
     */
    updatedAtDollarGte?: Date;
    /**
     * Date as ISO String
     */
    updatedAtDollarLte?: Date;
}
/**
 * Returns an array of token objects
 */
export declare class GetTokens200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns an array of token objects
     */
    getTokens200ApplicationJSONObject?: GetTokens200ApplicationJSON;
}
