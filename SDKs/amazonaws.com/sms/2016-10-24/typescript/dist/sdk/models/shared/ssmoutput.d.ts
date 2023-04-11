import { SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
/**
 * Contains the location of validation output.
 */
export declare class SSMOutput extends SpeakeasyBase {
    /**
     * Location of an Amazon S3 object.
     */
    s3Location?: S3Location;
}
