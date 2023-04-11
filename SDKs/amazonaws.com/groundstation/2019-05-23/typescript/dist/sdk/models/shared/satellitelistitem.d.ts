import { SpeakeasyBase } from "../../../internal/utils";
import { EphemerisMetaData } from "./ephemerismetadata";
/**
 * Item in a list of satellites.
 */
export declare class SatelliteListItem extends SpeakeasyBase {
    currentEphemeris?: EphemerisMetaData;
    groundStations?: string[];
    noradSatelliteID?: number;
    satelliteArn?: string;
    satelliteId?: string;
}
