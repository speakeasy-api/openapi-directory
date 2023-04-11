import { SpeakeasyBase } from "../../../internal/utils";
import { EphemerisItem } from "./ephemerisitem";
/**
 * Success
 */
export declare class ListEphemeridesResponse extends SpeakeasyBase {
    ephemerides?: EphemerisItem[];
    nextToken?: string;
}
