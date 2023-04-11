import { SpeakeasyBase } from "../../../internal/utils";
import { AircraftEquipment } from "./aircraftequipment";
import { Co2Emission } from "./co2emission";
import { FlightEndPoint } from "./flightendpoint";
import { FlightStop } from "./flightstop";
import { OperatingFlight } from "./operatingflight";
/**
 * defining a flight segment; including both operating and marketing details when applicable
 */
export declare class Segment extends SpeakeasyBase {
    /**
     * information related to the aircraft
     */
    aircraft?: AircraftEquipment;
    /**
     * departure or arrival information
     */
    arrival?: FlightEndPoint;
    /**
     * When the flight has a marketing or/and operating airline that is identified as blacklisted by the European Commission.
     *
     * @remarks
     *
     * To improve travel safety, the European Commission regularly updates the list of the banned carriers from operating in Europe. It allows any Travel Agency located in the European Union to easily identify and hide any travel recommendation based on some unsafe airlines.
     * The [list of the banned airlines](https://ec.europa.eu/transport/sites/transport/files/air-safety-list_en.pdf) is published in the Official Journal of the European Union, where they are included as annexes A and B to the Commission Regulation. The blacklist of an airline can concern all its flights or some specific aircraft types pertaining to the airline
     *
     */
    blacklistedInEU?: boolean;
    /**
     * providing the airline / carrier code
     */
    carrierCode?: string;
    /**
     * Co2 informations
     */
    co2Emissions?: Co2Emission[];
    /**
     * departure or arrival information
     */
    departure?: FlightEndPoint;
    /**
     * stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
     */
    duration?: string;
    /**
     * Id of the segment
     */
    id?: string;
    /**
     * the flight number as assigned by the carrier
     */
    number?: string;
    /**
     * Number of stops
     */
    numberOfStops?: number;
    /**
     * information about the operating flight
     */
    operating?: OperatingFlight;
    /**
     * information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...
     */
    stops?: FlightStop[];
}
