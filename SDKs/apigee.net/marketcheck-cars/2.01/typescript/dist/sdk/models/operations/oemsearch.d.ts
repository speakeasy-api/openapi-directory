import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the incentive
 */
export declare enum OemSearchOfferTypeEnum {
    Lease = "lease",
    Finance = "finance",
    Cash = "cash"
}
export declare class OemSearchRequest extends SpeakeasyBase {
    /**
     * To filter listing on acquisition fee of the car
     */
    acquisitionFee?: string;
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * APR range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    apr?: string;
    /**
     * To filter listing on cashback amounts listed in offer
     */
    cashbackAmount?: string;
    /**
     * To filter listing on the demographic or any other entity for whom this cashback offer is for. Not all target groups are identified but the most common ones are tagged like Military, Grad students Current owners etc
     */
    cashbackTargetGroup?: string;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country?: shared.CountryEnum;
    /**
     * To filter listing on any contribution from dealer's side
     */
    dealerContribution?: string;
    /**
     * To filter listing on disposition fee of the car
     */
    dispositionFee?: string;
    /**
     * To filter listing on down payment offer on car
     */
    downPayment?: string;
    /**
     * To filter listing on total amount due at signing, that usually includes first month payment, down payment, acquisition fee etc
     */
    dueAtSigning?: string;
    /**
     * To filter listing on offer duration in months
     */
    duration?: string;
    /**
     * Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param
     */
    facetSort?: shared.FacetSortEnum;
    /**
     * The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
     */
    facets?: string;
    /**
     * First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    firstSeenRange?: string;
    /**
     * To filter listing on gross capitalised cost of the car
     */
    grossCapitalisedCost?: string;
    /**
     * Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623
     */
    lastSeenRange?: string;
    /**
     * Latitude component of location
     */
    latitude?: number;
    /**
     * To filter listing on amount at the lease end to pay for buying the car
     */
    leaseEndPurchaseOption?: string;
    /**
     * Longitude component of location
     */
    longitude?: number;
    /**
     * To filter listings on their make
     */
    make?: string;
    /**
     * Mileage Charge Range range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 100-1000
     */
    mileageCharge?: string;
    /**
     * To filter listing on mileage charge limit the offer is valid up to under the default clauses
     */
    mileageChargeLimit?: string;
    /**
     * To filter listings on their model
     */
    model?: string;
    /**
     * To filter listing on Monthly payment amount, usually populated in Lease offers
     */
    monthly?: string;
    /**
     * To filter listing on monthly amount to be paid by customer for every $1000 financed at the advertised APR rate
     */
    monthlyPerThousand?: string;
    /**
     * MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    msrp?: string;
    /**
     * To filter listing on net capitalised cost of the car
     */
    netCapitalisedCost?: string;
    /**
     * The type of the incentive
     */
    offerType?: OemSearchOfferTypeEnum;
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
     * To filter listing on security deposit required for the offer
     */
    securityDeposit?: string;
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
     * The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
     */
    stats?: string;
    /**
     * To filter listing on gross capitalised cost of the car
     */
    totalMonthlyPayment?: string;
    /**
     * To filter listing on their trim
     */
    trim?: string;
    /**
     * To filter listing on their year
     */
    year?: string;
    /**
     * To filter listing on ZIP around which they are listed
     */
    zip?: string;
}
export declare class OemSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * List of all oem incentive listings matching the search & filter criteria
     */
    searchResponse?: shared.SearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
