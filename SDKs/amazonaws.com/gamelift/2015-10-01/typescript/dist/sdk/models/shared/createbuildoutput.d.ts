import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCredentials } from "./awscredentials";
import { Build } from "./build";
import { S3Location } from "./s3location";
/**
 * Success
 */
export declare class CreateBuildOutput extends SpeakeasyBase {
    build?: Build;
    storageLocation?: S3Location;
    uploadCredentials?: AwsCredentials;
}
