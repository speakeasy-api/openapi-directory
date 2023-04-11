import { SpeakeasyBase } from "../../../internal/utils";
import { BaggageAllowance } from "./baggageallowance";
import { ExtendedPrice } from "./extendedprice";
import { FlightOfferSourceEnum } from "./flightoffersourceenum";
import { Price } from "./price";
import { PricingOptionsFareTypeEnum } from "./pricingoptionsfaretypeenum";
import { Segment } from "./segment";
import { ServiceNameEnum } from "./servicenameenum";
import { SliceDiceIndicatorEnum } from "./slicediceindicatorenum";
import { TravelClassEnum } from "./travelclassenum";
import { TravelerPricingFareOptionEnum } from "./travelerpricingfareoptionenum";
import { TravelerTypeEnum } from "./travelertypeenum";
export declare class FlightOfferItineraries extends SpeakeasyBase {
    /**
     * duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M for a duration of 2h10m
     */
    duration?: string;
    segments: Segment[];
}
export declare class FlightOfferPricingOptions extends SpeakeasyBase {
    /**
     * type of fare of the flight-offer
     */
    fareType?: PricingOptionsFareTypeEnum[];
    /**
     * If true, returns the flight-offers with included checked bags only
     */
    includedCheckedBagsOnly?: boolean;
    /**
     * If true, returns the flight-offers with no penalty fares only
     */
    noPenaltyFare?: boolean;
    /**
     * If true, returns the flight-offers with no restriction fares only
     */
    noRestrictionFare?: boolean;
    /**
     * If true, returns the flight-offers with refundable fares only
     */
    refundableFare?: boolean;
}
export declare class FlightOfferTravelerPricingFareDetailsBySegmentAdditionalServicesRequest extends SpeakeasyBase {
    /**
     * baggageAllowance
     */
    chargeableCheckedBags?: BaggageAllowance;
    /**
     * seat number
     */
    chargeableSeatNumber?: string;
    /**
     * Other services to add
     */
    otherServices?: ServiceNameEnum[];
}
export declare class FlightOfferTravelerPricingFareDetailsBySegmentAllotmentDetails extends SpeakeasyBase {
    tourName?: string;
    tourReference?: string;
}
/**
 * Fare details of the segment
 */
export declare class FlightOfferTravelerPricingFareDetailsBySegment extends SpeakeasyBase {
    additionalServices?: FlightOfferTravelerPricingFareDetailsBySegmentAdditionalServicesRequest;
    allotmentDetails?: FlightOfferTravelerPricingFareDetailsBySegmentAllotmentDetails;
    /**
     * The name of the Fare Family corresponding to the fares. Only for the GDS provider and if the airline has fare families filled
     */
    brandedFare?: string;
    /**
     * quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class
     */
    cabin?: TravelClassEnum;
    /**
     * The code of the booking class, a.k.a. class of service or Reservations/Booking Designator (RBD)
     */
    class?: string;
    /**
     * Fare basis specifying the rules of a fare. Usually, though not always, is composed of the booking class code followed by a set of letters and digits representing other characteristics of the ticket, such as refundability, minimum stay requirements, discounts or special promotional elements.
     */
    fareBasis?: string;
    /**
     * baggageAllowance
     */
    includedCheckedBags?: BaggageAllowance;
    /**
     * True if the corresponding booking class is in an allotment
     */
    isAllotment?: boolean;
    /**
     * Id of the segment
     */
    segmentId: string;
    /**
     * slice and Dice indicator, such as Local Availability, Sub OnD(Origin and Destination) 1 Availability and Sub OnD 2 Availability
     */
    sliceDiceIndicator?: SliceDiceIndicatorEnum;
}
export declare class FlightOfferTravelerPricing extends SpeakeasyBase {
    /**
     * if type="HELD_INFANT", corresponds to the adult traveler's id who will share the seat
     */
    associatedAdultId?: string;
    fareDetailsBySegment: FlightOfferTravelerPricingFareDetailsBySegment[];
    /**
     * option specifying a group of fares, which may be valid under certain conditons
     *
     * @remarks
     * Can be used to specify special fare discount for a passenger
     *
     */
    fareOption: TravelerPricingFareOptionEnum;
    price?: Price;
    /**
     * Id of the traveler
     */
    travelerId: string;
    /**
     * traveler type
     *
     * @remarks
     * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
     *
     */
    travelerType: TravelerTypeEnum;
}
export declare class FlightOffer extends SpeakeasyBase {
    /**
     * BOOK step ONLY - If true, allows to book a PNR without pricing. Only for the source "GDS"
     */
    disablePricing?: boolean;
    /**
     * Id of the flight offer
     */
    id: string;
    /**
     * If true, inform that a ticketing will be required at booking step.
     */
    instantTicketingRequired?: boolean;
    itineraries?: FlightOfferItineraries[];
    /**
     * If booked on the same day as the search (with respect to timezone), this flight offer is guaranteed to be thereafter valid for ticketing until this date (included). Unspecified when it does not make sense for this flight offer (e.g. no control over ticketing once booked). YYYY-MM-DD format, e.g. 2019-06-07
     */
    lastTicketingDate?: string;
    /**
     * If true, upon completion of the booking, this pricing solution is expected to yield multiple records (a record contains booking information confirmed and stored, typically a Passenger Name Record (PNR), in the provider GDS or system)
     */
    nonHomogeneous?: boolean;
    /**
     * Number of seats bookable in a single request. Can not be higher than 9.
     */
    numberOfBookableSeats?: number;
    /**
     * If true, the flight offer fulfills only one originDestination and has to be combined with other oneWays to complete the whole journey.
     */
    oneWay?: boolean;
    /**
     * If true, a payment card is mandatory to book this flight offer
     */
    paymentCardRequired?: boolean;
    /**
     * price information
     */
    price?: ExtendedPrice;
    pricingOptions?: FlightOfferPricingOptions;
    /**
     * source of the flight offer
     */
    source?: FlightOfferSourceEnum;
    /**
     * Fare information for each traveler/segment
     */
    travelerPricings?: FlightOfferTravelerPricing[];
    /**
     * the resource name
     */
    type: string;
    /**
     * This option ensures that the system will only consider these airlines.
     */
    validatingAirlineCodes?: string[];
}
