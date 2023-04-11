import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVehiclesRequest extends SpeakeasyBase {
    /**
     * Get a list of active vehicles
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
     * Populate driver
     */
    includeDriver?: boolean;
    /**
     * Populate organization
     */
    includeOrganization?: boolean;
    /**
     * Populate token
     */
    includeToken?: boolean;
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
 * Returns a list of vehicle objects
 */
export declare class GetVehicles200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetVehiclesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a list of vehicle objects
     */
    getVehicles200ApplicationJSONObject?: GetVehicles200ApplicationJSON;
}
