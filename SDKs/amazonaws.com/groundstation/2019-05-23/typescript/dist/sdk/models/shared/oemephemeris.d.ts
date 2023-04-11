import { SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
/**
 * Ephemeris data in Orbit Ephemeris Message (OEM) format.
 */
export declare class OEMEphemeris extends SpeakeasyBase {
    oemData?: string;
    s3Object?: S3Object;
}
