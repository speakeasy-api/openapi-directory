import { SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
/**
 * Description of ephemeris.
 */
export declare class EphemerisDescription extends SpeakeasyBase {
    ephemerisData?: string;
    sourceS3Object?: S3Object;
}
