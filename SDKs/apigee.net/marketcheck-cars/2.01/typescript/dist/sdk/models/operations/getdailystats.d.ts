import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Inventory type for which stats are to be searched, default is used
 */
export declare enum GetDailyStatsCarTypeEnum {
    New = "new",
    Used = "used"
}
/**
 * Country for which the stats are to be searched
 */
export declare enum GetDailyStatsCountryEnum {
    Us = "us",
    Ca = "ca"
}
export declare class GetDailyStatsRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Inventory type for which stats are to be searched, default is used
     */
    carType?: GetDailyStatsCarTypeEnum;
    /**
     * City level stats, pipe seperated like city_state=jacksonville|FL
     */
    cityState?: string;
    /**
     * Country for which the stats are to be searched
     */
    country?: GetDailyStatsCountryEnum;
    /**
     * State level stats
     */
    state?: string;
    /**
     * Taxonomy vin for referance to find stats of similar cars
     */
    taxonomyVin?: string;
    /**
     * VIN that will be transformed to taxonomy_vin
     */
    vin?: string;
    /**
     * Year, Make, Model of the car, Separated by pipe e.g. ymm=2015|ford|f-150
     */
    ymm?: string;
    /**
     * Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt=2015|ford|f-150|platinum
     */
    ymmt?: string;
}
export declare class GetDailyStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data with Market averages and stats
     */
    dailyStats?: shared.DailyStats;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
