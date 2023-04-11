import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDealersHeavyEquipmentRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country?: shared.NonDefaultCountryEnum;
    /**
     * Filter based on dealer type independant or franchise
     */
    dealerType?: shared.DealerTypeEnum;
    /**
     * The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
     */
    facets?: string;
    /**
     * inventory_url of dealer to be searched
     */
    inventoryUrl?: string;
    /**
     * Latitude component of location
     */
    latitude?: number;
    /**
     * To filter dealers based on their inventory size. Range can be given in the format - min-max e.g. 50-100
     */
    listingCountRange?: string;
    /**
     * Longitude component of location
     */
    longitude?: number;
    /**
     * boolean param to include site providers name in response
     */
    provider?: boolean;
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
     * Sort by field. Default sort field is distance from the given point
     */
    sortBy?: string;
    /**
     * Sort order - asc or desc. Default sort order is asc
     */
    sortOrder?: shared.SortOrderEnum;
    /**
     * Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows
     */
    start?: number;
    /**
     * To filter listing on State in which they are listed
     */
    state?: string;
    /**
     * To filter listing on ZIP around which they are listed
     */
    zip?: string;
}
export declare class GetDealersHeavyEquipmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of dealers for the search
     */
    dealersResponse?: shared.DealersResponse;
    /**
     * Error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
