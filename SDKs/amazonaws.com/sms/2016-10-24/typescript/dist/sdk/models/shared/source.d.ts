import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * Contains the location of a validation script.
 */
export declare class Source extends SpeakeasyBase {
    /**
     * Location of an Amazon S3 object.
     */
    s3Location?: S3Location;
}
