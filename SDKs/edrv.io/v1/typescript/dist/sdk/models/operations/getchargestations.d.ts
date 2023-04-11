import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChargeStationsRequest extends SpeakeasyBase {
    /**
     * Chargestations that have been activated/deactivated by the admin
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
     * Populate evses
     */
    includeEvses?: boolean;
    /**
     * Populate location
     */
    includeLocation?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Filter by Location Id
     */
    location?: string;
    /**
     * Filter by Online Status
     */
    online?: boolean;
    /**
     * Filter by Org. Id
     */
    organization?: string;
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
     * Chargestations that are public
     */
    public?: boolean;
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
export declare class GetChargeStationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
