import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Field name for which you want auto-completion
 */
export declare enum AutoCompleteFieldEnum {
    Ymm = "ymm",
    Mm = "mm",
    Make = "make",
    Model = "model",
    Trim = "trim",
    BodyType = "body_type",
    BodySubtype = "body_subtype",
    VehicleType = "vehicle_type",
    Transmission = "transmission",
    Drivetrain = "drivetrain",
    FuelType = "fuel_type",
    ExteriorColor = "exterior_color",
    InteriorColor = "interior_color",
    Engine = "engine",
    EngineSize = "engine_size",
    EngineBlock = "engine_block",
    State = "state",
    City = "city"
}
/**
 * Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results
 */
export declare enum AutoCompleteIncludeNonVinListingsEnum {
    True = "true",
    False = "false"
}
/**
 * Sort the response, either by index or count(default)
 */
export declare enum AutoCompleteSortByEnum {
    Index = "index",
    Count = "count"
}
export declare class AutoCompleteRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
     */
    bodySubtype?: string;
    /**
     * To filter listing on their body type
     */
    bodyType?: string;
    /**
     * Car type. Allowed values are - new / used
     */
    carType?: shared.CarTypeEnum;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country?: shared.CountryEnum;
    /**
     * Dealer id to filter the listings.
     */
    dealerId?: string;
    /**
     * To filter listing on their drivetrain
     */
    drivetrain?: string;
    /**
     * To filter listing on their engine
     */
    engine?: string;
    /**
     * Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
     */
    engineBlock?: string;
    /**
     * Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
     */
    engineSize?: string;
    /**
     * A list of dealer ids to exclude from result
     */
    excludeDealerIds?: string;
    /**
     * A list of sources to exclude from result
     */
    excludeSources?: string;
    /**
     * Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
     */
    exteriorColor?: string;
    /**
     * Provide minimum count value for facets
     */
    facetMinCount?: number;
    /**
     * Field name for which you want auto-completion
     */
    field: AutoCompleteFieldEnum;
    /**
     * To filter listing on their fuel type
     */
    fuelType?: string;
    /**
     * Boolean variable to indicate ignore case of current input
     */
    ignoreCase?: boolean;
    /**
     * A boolean to filter in transit vehicles
     */
    inTransit?: shared.InTransitEnum;
    /**
     * Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results
     */
    includeNonVinListings?: AutoCompleteIncludeNonVinListingsEnum;
    /**
     * Input entered so far
     */
    input: string;
    /**
     * Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
     */
    interiorColor?: string;
    /**
     * Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50
     */
    inventoryCountRange?: string;
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
    sortBy?: AutoCompleteSortByEnum;
    /**
     * To filter listing on their source only for widget requests
     */
    source?: string;
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
export declare class AutoCompleteResponse extends SpeakeasyBase {
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
