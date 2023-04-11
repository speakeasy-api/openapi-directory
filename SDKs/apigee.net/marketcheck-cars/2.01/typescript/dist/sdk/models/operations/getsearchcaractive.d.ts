import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchCarActiveRequest extends SpeakeasyBase {
    /**
     * date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    activeInventoryDateRange?: string;
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Flag on whether to include api_key in response API urls (if any)
     */
    appendApiKey?: boolean;
    /**
     * Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
     */
    baseExteriorColor?: string;
    /**
     * Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
     */
    baseInteriorColor?: string;
    /**
     * Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
     */
    bodySubtype?: string;
    /**
     * To filter listing on their body type
     */
    bodyType?: string;
    /**
     * Car type. Allowed values are - new / used / certified
     */
    carType?: shared.CarCarTypeEnum;
    /**
     * Indicates whether car has had only one owner or not
     */
    carfax1Owner?: shared.Carfax1OwnerEnum;
    /**
     * Indicates whether car has clean ownership records
     */
    carfaxCleanTitle?: shared.CarfaxCleanTitleEnum;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    cityMpgRange?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country?: shared.CarCountryEnum;
    /**
     * To filter listing on their cylinders
     */
    cylinders?: string;
    /**
     * Dealer id to filter the listings.
     */
    dealerId?: string;
    /**
     * Filter based on dealer type independant or franchise
     */
    dealerType?: shared.DealerTypeEnum;
    /**
     * If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source
     */
    dedup?: boolean;
    /**
     * Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     */
    dom180Range?: string;
    /**
     * Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     */
    domActiveRange?: string;
    /**
     * Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     */
    domRange?: string;
    /**
     * Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
     */
    doors?: string;
    /**
     * To filter listing on their drivetrain
     */
    drivetrain?: string;
    /**
     * To filter listing on their engine
     */
    engine?: string;
    /**
     * Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
     */
    engineAspiration?: string;
    /**
     * Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
     */
    engineBlock?: string;
    /**
     * Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
     */
    engineSize?: string;
    /**
     * Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2
     */
    engineSizeRange?: string;
    /**
     * Boolean param to exclude certified cars from search results
     */
    excludeCertified?: boolean;
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
     * Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
     */
    facetSort?: shared.FacetSortEnum;
    /**
     * The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
     */
    facets?: string;
    /**
     * Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60
     */
    financeDownPayment?: string;
    /**
     * Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60
     */
    financeDownPaymentPer?: string;
    /**
     * Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60
     */
    financeEmp?: string;
    /**
     * Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60
     */
    financeLoanApr?: string;
    /**
     * Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60
     */
    financeLoanTerm?: string;
    /**
     * First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12
     */
    firstSeenAtMcDays?: string;
    /**
     * First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    firstSeenAtMcRange?: string;
    /**
     * First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12
     */
    firstSeenAtSourceDays?: string;
    /**
     * First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    firstSeenAtSourceRange?: string;
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
     * To filter listings on their high_value_features. Results will be intersection of provided HVFs
     */
    highValueFeatures?: string;
    /**
     * Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    highwayMpgRange?: string;
    /**
     * A boolean to filter in transit vehicles
     */
    inTransit?: shared.InTransitEnum;
    /**
     * Boolean param to search for listings that include finance options in them
     */
    includeFinance?: boolean;
    /**
     * Boolean param to search for listings that include leasing options in them
     */
    includeLease?: boolean;
    /**
     * To include non vin listings. Default is false
     */
    includeNonVinListings?: boolean;
    /**
     * To include_relevant_links. Default is true
     */
    includeRelevantLinks?: boolean;
    /**
     * Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
     */
    interiorColor?: string;
    /**
     * Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50
     */
    inventoryCountRange?: string;
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
     * Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60
     */
    leaseDownPayment?: string;
    /**
     * Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60
     */
    leaseEmp?: string;
    /**
     * Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60
     */
    leaseTerm?: string;
    /**
     * Longitude component of location
     */
    longitude?: number;
    /**
     * To filter listings on their make
     */
    make?: string;
    /**
     * Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match
     */
    match?: string;
    /**
     * Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
     */
    milesRange?: string;
    /**
     * Filter listings based by number of photo links within given range
     */
    minPhotoLinks?: string;
    /**
     * Filter listings based by number of cached photo links within given range
     */
    minPhotoLinksCached?: string;
    /**
     * Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is
     */
    mm?: string;
    /**
     * To filter listings on their model
     */
    model?: string;
    /**
     * To filter listing on msa code in which they are listed
     */
    msaCode?: string;
    /**
     * MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    msrpRange?: string;
    /**
     * If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin
     */
    nodedup?: boolean;
    /**
     * Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself
     */
    owned?: boolean;
    /**
     * A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them
     */
    photoLinks?: boolean;
    /**
     * A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them
     */
    photoLinksCached?: boolean;
    /**
     * If plot has value true results in around 25k coordinates with limited fields to plot respective graph
     */
    plot?: boolean;
    /**
     * To filter on powertrain_type
     */
    powertrainType?: string;
    /**
     * Query to filter listings based on their positive and negative price change
     */
    priceChange?: shared.PriceChangeEnum;
    /**
     * Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500
     */
    priceChangeRange?: string;
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
     * To filter listing on their source only for widget requests
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
     * To filter listing on their stock number on lot
     */
    stockNo?: string;
    /**
     * Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.
     */
    taxonomyVins?: string;
    /**
     * To filter listing on their transmission
     */
    transmission?: string;
    /**
     * To filter listing on their trim
     */
    trim?: string;
    /**
     * Filter listings on web scraped trim
     */
    trimO?: string;
    /**
     * Filter trim on custom possible matches
     */
    trimR?: string;
    /**
     * To filter listing on their vehicle type
     */
    vehicleType?: string;
    /**
     * To filter listing on their VIN
     */
    vin?: string;
    /**
     * Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc
     */
    vins?: string;
    /**
     * To filter listing on their year
     */
    year?: string;
    /**
     * Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021
     */
    yearRange?: string;
    /**
     * Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is
     */
    ymm?: string;
    /**
     * Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations.
     */
    ymmt?: string;
    /**
     * To filter listing on ZIP around which they are listed
     */
    zip?: string;
}
export declare class GetSearchCarActiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * List of all cars listings matching the search & filter criteria
     */
    searchResponse?: shared.SearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
