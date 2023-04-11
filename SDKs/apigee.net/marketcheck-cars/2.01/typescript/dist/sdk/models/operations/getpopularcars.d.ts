import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Inventory type for which popular count is to be searched
 */
export declare enum GetPopularCarsCarTypeEnum {
    New = "new",
    Used = "used"
}
/**
 * Country for which the popular cars are to be searched
 */
export declare enum GetPopularCarsCountryEnum {
    UsLower = "us",
    CaLower = "ca",
    UsUpper = "US",
    CaUpper = "CA"
}
export declare class GetPopularCarsRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Inventory type for which popular count is to be searched
     */
    carType: GetPopularCarsCarTypeEnum;
    /**
     * City level sales count, pipe seperated like city_state=jacksonville|FL
     */
    cityState?: string;
    /**
     * Country for which the popular cars are to be searched
     */
    country?: GetPopularCarsCountryEnum;
    /**
     * State level sales count
     */
    state?: string;
}
export declare class GetPopularCarsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * List of most popular top 50 cars
     */
    popularCars?: shared.PopularCars;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
