import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDriversRequest extends SpeakeasyBase {
    /**
     * Get a list of active drivers
     */
    active?: boolean;
    /**
     * Date as ISO String
     */
    createdAtDollarGte?: Date;
    /**
     * Date as ISO String
     */
    createdAtDollarLte?: Date;
    /**
     * Populate group
     */
    includeGroup?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate tokens
     */
    includeTokens?: boolean;
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
 * Returns a list of driver objects
 */
export declare class GetDrivers200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetDriversResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a list of driver objects
     */
    getDrivers200ApplicationJSONObject?: GetDrivers200ApplicationJSON;
}
