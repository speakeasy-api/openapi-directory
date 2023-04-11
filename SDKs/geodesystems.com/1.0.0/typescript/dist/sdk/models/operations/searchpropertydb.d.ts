import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchPropertydbRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Address
     */
    searchDbPropertydbAddress?: string;
    /**
     * Building Type
     */
    searchDbPropertydbBuildingType?: string;
    /**
     * City
     */
    searchDbPropertydbCity?: string;
    /**
     * Building Sq Ft
     */
    searchDbPropertydbHouseSize?: number;
    /**
     * Location
     */
    searchDbPropertydbLocation?: string;
    /**
     * Lot Size Acres
     */
    searchDbPropertydbLotAcres?: number;
    /**
     * Lot Size Sq Ft
     */
    searchDbPropertydbLotSqft?: number;
    /**
     * Owner
     */
    searchDbPropertydbOwner?: string;
    /**
     * $-sqft
     */
    searchDbPropertydbPriceSqft?: number;
    /**
     * Property ID
     */
    searchDbPropertydbPropertyId?: string;
    /**
     * State
     */
    searchDbPropertydbState?: string;
    /**
     * Property Value
     */
    searchDbPropertydbValue?: number;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchPropertydbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
