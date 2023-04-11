import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
/**
 * Two-line element set (TLE) data.
 */
export declare class TLEData extends SpeakeasyBase {
    tleLine1: string;
    tleLine2: string;
    validTimeRange: TimeRange;
}
