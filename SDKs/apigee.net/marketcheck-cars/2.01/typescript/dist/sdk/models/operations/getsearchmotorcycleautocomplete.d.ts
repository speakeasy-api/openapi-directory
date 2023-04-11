import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Field name for which you want auto-completion
 */
export declare enum GetSearchMotorcycleAutoCompleteFieldEnum {
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    Color = "color",
    Engine = "engine",
    State = "state",
    City = "city"
}
/**
 * Sort the response, either by index or count(default)
 */
export declare enum GetSearchMotorcycleAutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}
export declare class GetSearchMotorcycleAutoCompleteRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * To filter listing on their body type
     */
    bodyType?: string;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * Color of the vehicle
     */
    color?: string;
    /**
     * To filter listing on their drivetrain
     */
    drivetrain?: string;
    /**
     * To filter listing on their engine
     */
    engine?: string;
    /**
     * Provide minimum count value for facets
     */
    facetMinCount?: number;
    /**
     * Field name for which you want auto-completion
     */
    field: GetSearchMotorcycleAutoCompleteFieldEnum;
    /**
     * To filter listing on their fuel type
     */
    fuelType?: string;
    /**
     * Boolean variable to indicate ignore case of current input
     */
    ignoreCase?: boolean;
    /**
     * Input entered so far
     */
    input: string;
    /**
     * To filter listing on their condition. Either used or new
     */
    inventoryType?: shared.InventoryTypeEnum;
    /**
     * To filter listings on their make
     */
    make?: string;
    /**
     * To filter listings on their model
     */
    model?: string;
    /**
     * Radius around the search location (Unit - Miles)
     */
    radius?: number;
    /**
     * seller type for autocomplete
     */
    sellerType?: string;
    /**
     * Sort the response, either by index or count(default)
     */
    sortBy?: GetSearchMotorcycleAutoCompleteSortByEnum;
    /**
     * To filter listing on State in which they are listed
     */
    state?: string;
    /**
     * Boolean variable to indicate wheather to include term counts as well in response
     */
    termCounts?: boolean;
    /**
     * To filter listing on their transmission
     */
    transmission?: string;
    /**
     * To filter listing on their trim
     */
    trim?: string;
    /**
     * To filter listing on their vehicle type
     */
    vehicleType?: string;
    /**
     * To filter listing on their year
     */
    year?: string;
    /**
     * To filter listing on ZIP around which they are listed
     */
    zip?: string;
}
export declare class GetSearchMotorcycleAutoCompleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Unique terms available in given field for auto completion
     */
    searchAutoCompleteResponse?: shared.SearchAutoCompleteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
