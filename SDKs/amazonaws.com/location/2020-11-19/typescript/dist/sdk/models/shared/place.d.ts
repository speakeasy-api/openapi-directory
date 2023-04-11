import { SpeakeasyBase } from "../../../internal/utils";
import { PlaceGeometry } from "./placegeometry";
import { TimeZone } from "./timezone";
/**
 * <p>Contains details about addresses or points of interest that match the search criteria.</p> <p>Not all details are included with all responses. Some details may only be returned by specific data partners.</p>
 */
export declare class Place extends SpeakeasyBase {
    addressNumber?: string;
    country?: string;
    /**
     * Places uses a point geometry to specify a location or a Place.
     */
    geometry: PlaceGeometry;
    interpolated?: boolean;
    label?: string;
    municipality?: string;
    neighborhood?: string;
    postalCode?: string;
    region?: string;
    street?: string;
    subRegion?: string;
    timeZone?: TimeZone;
    unitNumber?: string;
    unitType?: string;
}
