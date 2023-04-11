import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCredentials } from "./awscredentials";
import { S3Location } from "./s3location";
/**
 * Success
 */
export declare class RequestUploadCredentialsOutput extends SpeakeasyBase {
    storageLocation?: S3Location;
    uploadCredentials?: AwsCredentials;
}
