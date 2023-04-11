import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object stored in S3 containing ephemeris data.
 */
export declare class S3Object extends SpeakeasyBase {
    bucket?: string;
    key?: string;
    version?: string;
}
