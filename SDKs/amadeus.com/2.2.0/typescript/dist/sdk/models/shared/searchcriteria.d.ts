import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageEnum } from "./coverageenum";
import { ExtendedPricingOptions } from "./extendedpricingoptions";
import { TravelClassEnum } from "./travelclassenum";
export declare class SearchCriteriaAdditionalInformation extends SpeakeasyBase {
    /**
     * If true, returns the fare family name for each flight-offer which supports fare family
     */
    brandedFares?: boolean;
    /**
     * If true, returns the price of the first additional bag when the airline is an "Amadeus Ancillary Services" member.
     */
    chargeableCheckedBags?: boolean;
}
export declare class SearchCriteriaFlightFiltersCabinRestriction extends SpeakeasyBase {
    /**
     * quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class
     */
    cabin?: TravelClassEnum;
    /**
     * part of the trip covered by the travel class restriction (ALL_SEGMENTS if ommited)
     */
    coverage?: CoverageEnum;
    /**
     * The list of originDestination identifiers for which the cabinRestriction applies
     */
    originDestinationIds?: string[];
}
/**
 * Restriction towards carriers.
 */
export declare class SearchCriteriaFlightFiltersCarrierRestrictions extends SpeakeasyBase {
    /**
     * This flag enable/disable filtering of blacklisted airline by EU. The list of the banned airlines is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline
     */
    blacklistedInEUAllowed?: boolean;
    /**
     * This option ensures that the system will only consider these airlines.
     */
    excludedCarrierCodes?: string[];
    /**
     * This option ensures that the system will only consider these airlines.
     */
    includedCarrierCodes?: string[];
}
/**
 * Restriction towards number of connections.
 */
export declare class SearchCriteriaFlightFiltersConnectionRestriction extends SpeakeasyBase {
    /**
     * Allow to change airport during connection
     */
    airportChangeAllowed?: boolean;
    /**
     * The maximal number of connections for each itinerary. Value can be 0, 1 or 2.
     */
    maxNumberOfConnections?: number;
    /**
     * This option allows the single segment to have one or more intermediate stops (technical stops).
     */
    technicalStopsAllowed?: boolean;
}
export declare class SearchCriteriaFlightFilters extends SpeakeasyBase {
    /**
     * This flag enable/disable filtering of bus segment
     */
    busSegmentAllowed?: boolean;
    /**
     * Restriction towards cabins.
     */
    cabinRestrictions?: SearchCriteriaFlightFiltersCabinRestriction[];
    /**
     * Restriction towards carriers.
     */
    carrierRestrictions?: SearchCriteriaFlightFiltersCarrierRestrictions;
    /**
     * Restriction towards number of connections.
     */
    connectionRestriction?: SearchCriteriaFlightFiltersConnectionRestriction;
    /**
     * Allows to search a location outside the borders when a radius around a location is specified. Default is false.
     */
    crossBorderAllowed?: boolean;
    /**
     * This option allows to modify the value for the Elapsed Flying Time (EFT) masterPricer option
     */
    maxFlightTime?: number;
    /**
     * This flag enables/disables the possibility to have more overnight flights in Low Fare Search
     */
    moreOvernightsAllowed?: boolean;
    /**
     * This flag enable/disable filtering of rail segment (TGV AIR, RAIL ...)
     */
    railSegmentAllowed?: boolean;
    /**
     * This option force to retrieve flight-offer with a departure and a return in the same airport
     */
    returnToDepartureAirport?: boolean;
}
export declare class SearchCriteria extends SpeakeasyBase {
    /**
     * This option allows activate the one-way combinable feature
     */
    addOneWayOffers?: boolean;
    additionalInformation?: SearchCriteriaAdditionalInformation;
    /**
     * This option allows to default to a standard fareOption if no offers are found for the selected fareOption.
     */
    allowAlternativeFareOptions?: boolean;
    /**
     * This option allows to exclude the isAllotment flag associated to a booking class in the search response when it exist.
     */
    excludeAllotments?: boolean;
    flightFilters?: SearchCriteriaFlightFilters;
    /**
     * Maximum number of flight offers returned (Max 250)
     */
    maxFlightOffers?: number;
    /**
     * maximum price per traveler. By default, no limit is applied. If specified, the value should be a positive number with no decimals
     */
    maxPrice?: number;
    /**
     * Requests the system to find at least one flight-offer per day, if possible, when a range of dates is specified. Default is false.
     */
    oneFlightOfferPerDay?: boolean;
    /**
     * fare filter options
     */
    pricingOptions?: ExtendedPricingOptions;
}
