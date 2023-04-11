import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchUfoSightingsRequest extends SpeakeasyBase {
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
     * City
     */
    searchDbUfoSightingsCity?: string;
    /**
     * Comments
     */
    searchDbUfoSightingsComments?: string;
    /**
     * Country
     */
    searchDbUfoSightingsCountry?: string;
    /**
     * Date Posted
     */
    searchDbUfoSightingsDatePosted?: string;
    /**
     * Datetime
     */
    searchDbUfoSightingsDatetime?: string;
    /**
     * Duration (hours/min)
     */
    searchDbUfoSightingsDurationHoursMin?: string;
    /**
     * Duration (seconds)
     */
    searchDbUfoSightingsDurationSeconds?: number;
    /**
     * Latitude
     */
    searchDbUfoSightingsLatitude?: number;
    /**
     * Longitude
     */
    searchDbUfoSightingsLongitude?: number;
    /**
     * Shape
     */
    searchDbUfoSightingsShape?: string;
    /**
     * State
     */
    searchDbUfoSightingsState?: string;
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
export declare class SearchUfoSightingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
