import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { GeoCoordinates } from "./geocoordinates";
export declare class Location extends SpeakeasyBase {
    /**
     * The physical location of the item.
     */
    address?: Address;
    /**
     * Defines the format of a geographic coordinate.
     */
    geoCoordinates?: GeoCoordinates;
}
