import { SpeakeasyBase } from "../../../internal/utils";
import { FlightOfferSourceEnum } from "./flightoffersourceenum";
import { OriginDestination } from "./origindestination";
import { SearchCriteria } from "./searchcriteria";
import { Traveler } from "./traveler";
/**
 * list of criteria to retrieve a list of flight offers
 */
export declare class GetFlightOffersQuery extends SpeakeasyBase {
    /**
     * The currency code, as defined in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217), to reflect the currency in which this amount is expressed.
     */
    currencyCode?: string;
    /**
     * Origins and Destinations must be properly ordered in time (chronological order in accordance with the timezone of each location) to describe the journey consistently. Dates and times must not be past nor more than 365 days in the future, according to provider settings.Number of Origins and Destinations must not exceed the limit defined in provider settings.
     */
    originDestinations: OriginDestination[];
    searchCriteria?: SearchCriteria;
    /**
     * Allows enable one or more sources. If present in the list, these sources will be called by the system.
     */
    sources: FlightOfferSourceEnum[];
    travelers: Traveler[];
}
