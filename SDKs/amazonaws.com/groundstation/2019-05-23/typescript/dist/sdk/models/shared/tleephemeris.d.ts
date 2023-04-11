import { SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
import { TLEData } from "./tledata";
/**
 * Two-line element set (TLE) ephemeris.
 */
export declare class TLEEphemeris extends SpeakeasyBase {
    s3Object?: S3Object;
    tleData?: TLEData[];
}
