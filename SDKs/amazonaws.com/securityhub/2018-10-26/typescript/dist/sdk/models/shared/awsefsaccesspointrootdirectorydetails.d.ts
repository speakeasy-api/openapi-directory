import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEfsAccessPointRootDirectoryCreationInfoDetails } from "./awsefsaccesspointrootdirectorycreationinfodetails";
/**
 * Provides information about the directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.
 */
export declare class AwsEfsAccessPointRootDirectoryDetails extends SpeakeasyBase {
    creationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;
    path?: string;
}
