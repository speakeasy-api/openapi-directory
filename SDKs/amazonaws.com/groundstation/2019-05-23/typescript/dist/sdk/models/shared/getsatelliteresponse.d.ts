import { SpeakeasyBase } from "../../../internal/utils";
import { EphemerisMetaData } from "./ephemerismetadata";
/**
 * <p/>
 */
export declare class GetSatelliteResponse extends SpeakeasyBase {
    currentEphemeris?: EphemerisMetaData;
    groundStations?: string[];
    noradSatelliteID?: number;
    satelliteArn?: string;
    satelliteId?: string;
}
