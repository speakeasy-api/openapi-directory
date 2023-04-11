import { SpeakeasyBase } from "../../../internal/utils";
import { GPSCoordinates } from "./gpscoordinates";
/**
 * Specifies GPS-based criteria for including or excluding endpoints from a segment.
 */
export declare class GPSPointDimension extends SpeakeasyBase {
    coordinates: GPSCoordinates;
    rangeInKilometers?: number;
}
