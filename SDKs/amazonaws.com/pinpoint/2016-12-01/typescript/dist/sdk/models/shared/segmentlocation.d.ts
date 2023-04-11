import { SpeakeasyBase } from "../../../internal/utils";
import { GPSPointDimension } from "./gpspointdimension";
import { SetDimension } from "./setdimension";
/**
 * Specifies geographical dimension settings for a segment.
 */
export declare class SegmentLocation extends SpeakeasyBase {
    country?: SetDimension;
    gpsPoint?: GPSPointDimension;
}
