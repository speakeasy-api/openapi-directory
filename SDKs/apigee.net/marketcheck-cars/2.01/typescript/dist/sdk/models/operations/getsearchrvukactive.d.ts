import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchRvUkActiveRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * To filter rv on their availability_status
     */
    availabilityStatus?: string;
    /**
     * Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
     */
    baseExteriorColor?: string;
    /**
     * Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
     */
    baseInteriorColor?: string;
    /**
     * To filter rv on their berths
     */
    berths?: string;
    /**
     * Filter RV listings on category
     */
    category?: string;
    /**
     * To filter rv on their chassis
     */
    chassis?: string;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * To filter listing on county in which they are listed
     */
    county?: string;
    /**
     * To filter listing on their cylinders
     */
    cylinders?: string;
    /**
     * Dealer id to filter the listings.
     */
    dealerId?: string;
    /**
     * Filter listings on dealer_name
     */
    dealerName?: string;
    /**
     * Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
     */
    doors?: string;
    /**
     * To filter rv on their drive_type
     */
    driveType?: string;
    /**
     * Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
     */
    engineSize?: string;
    /**
     * Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
     */
    exteriorColor?: string;
    /**
     * width range to filter listings on exterior_length in the range given. Range to be given in the format - min-max e.g. 4-8
     */
    exteriorLengthRange?: string;
    /**
     * Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
     */
    facetSort?: shared.FacetSortEnum;
    /**
     * The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
     */
    facets?: string;
    /**
     * First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12
     */
    firstSeenDays?: string;
    /**
     * First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    firstSeenRange?: string;
    /**
     * To filter listing on their fuel type
     */
    fuelType?: string;
    /**
     * Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
     */
    interiorColor?: string;
    /**
     * width range to filter listings on interior_length in the range given. Range to be given in the format - min-max e.g. 4-8
     */
    interiorLengthRange?: string;
    /**
     * To filter listing on their condition. Either used or new
     */
    inventoryType?: shared.InventoryTypeEnum;
    /**
     * Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12
     */
    lastSeenDays?: string;
    /**
     * Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    lastSeenRange?: string;
    /**
     * Latitude component of location
     */
    latitude?: number;
    /**
     * Longitude component of location
     */
    longitude?: number;
    /**
     * To filter listings on their make
     */
    make?: string;
    /**
     * Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
     */
    milesRange?: string;
    /**
     * To filter listings on their model
     */
    model?: string;
    /**
     * MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    msrpRange?: string;
    /**
     * To filter rv on mtplm
     */
    mtplm?: string;
    /**
     * To filter listing on postal code around which they are listed
     */
    postalCode?: string;
    /**
     * Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    priceRange?: string;
    /**
     * Radius around the search location (Unit - Miles)
     */
    radius?: number;
    /**
     * The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond.
     */
    rangeFacets?: string;
    /**
     * Number of results to return. Default is 10. Max is 50
     */
    rows?: number;
    /**
     * To search a substring across entire document
     */
    searchText?: string;
    /**
     * To filter on vehicle seating capacity
     */
    seatingCapacity?: string;
    /**
     * Sort by field. Default sort field is distance from the given point
     */
    sortBy?: string;
    /**
     * Sort order - asc or desc. Default sort order is asc
     */
    sortOrder?: shared.SortOrderEnum;
    /**
     * To filter listing on their source
     */
    source?: string;
    /**
     * Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows
     */
    start?: number;
    /**
     * To filter listing on State in which they are listed
     */
    state?: string;
    /**
     * The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
     */
    stats?: string;
    /**
     * To filter rv on their steering
     */
    steering?: string;
    /**
     * To filter rv on their sub-category
     */
    subCategory?: string;
    /**
     * To filter listing on their transmission
     */
    transmission?: string;
    /**
     * To filter listing on their VIN
     */
    vin?: string;
    /**
     * width range to filter listings on width in the range given. Range to be given in the format - min-max e.g. 4-8
     */
    widthRange?: string;
    /**
     * To filter listing on their year
     */
    year?: string;
    /**
     * Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021
     */
    yearRange?: string;
    /**
     * To filter listing on ZIP around which they are listed
     */
    zip?: string;
}
export declare class GetSearchRvUkActiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of all RV listings matching the search & filter criteria
     */
    ukrvSearchResponse?: shared.UKRVSearchResponse;
}
