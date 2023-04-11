import { SpeakeasyBase } from "../../../internal/utils";
import { EphemerisSourceEnum } from "./ephemerissourceenum";
/**
 * Metadata describing a particular ephemeris.
 */
export declare class EphemerisMetaData extends SpeakeasyBase {
    ephemerisId?: string;
    epoch?: Date;
    name?: string;
    source: EphemerisSourceEnum;
}
