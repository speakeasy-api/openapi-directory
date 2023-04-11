import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEfsAccessPointPosixUserDetails } from "./awsefsaccesspointposixuserdetails";
import { AwsEfsAccessPointRootDirectoryDetails } from "./awsefsaccesspointrootdirectorydetails";
/**
 * Provides information about an Amazon EFS access point.
 */
export declare class AwsEfsAccessPointDetails extends SpeakeasyBase {
    accessPointId?: string;
    arn?: string;
    clientToken?: string;
    fileSystemId?: string;
    posixUser?: AwsEfsAccessPointPosixUserDetails;
    rootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}
