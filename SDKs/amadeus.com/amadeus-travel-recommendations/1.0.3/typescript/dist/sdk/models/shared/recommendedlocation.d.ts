import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Geographic coordinates describing the position of any location on the surface of Earth
 */
export declare class RecommendedLocationGeoCode extends SpeakeasyBase {
    /**
     * Latitude of the position expressed in decimal degrees (WSG 84), e.g. 6.244203. A positive value denotes northern hemisphere or the equator, and a negative value denotes southern hemisphere. The number of digits to represent the precision of the coordinate.
     */
    latitude?: number;
    /**
     * Longitude of the position expressed in decimal degrees (WSG 84), e.g. -75.581211. A positive value denotes east longitude or the prime meridian, and a negative value denotes west longitude.  The number of digits to represent the precision of the coordinate.
     */
    longitude?: number;
}
/**
 * Description of a particular point or place in physical space
 */
export declare class RecommendedLocation extends SpeakeasyBase {
    /**
     * Geographic coordinates describing the position of any location on the surface of Earth
     */
    geoCode?: RecommendedLocationGeoCode;
    /**
     * IATA location code
     */
    iataCode?: string;
    /**
     * Label associated to the location (e.g. Eiffel Tower, Madison Square)
     */
    name?: string;
    /**
     * percentage of similarity.
     *
     * @remarks
     *
     * 0 for not similar to 1 for exactly the same
     */
    relevance?: number;
    /**
     * Location sub-type (e.g. airport, port, rail-station, restaurant, atm...)
     */
    subtype?: string;
    /**
     * Ressource type
     */
    type?: string;
}
