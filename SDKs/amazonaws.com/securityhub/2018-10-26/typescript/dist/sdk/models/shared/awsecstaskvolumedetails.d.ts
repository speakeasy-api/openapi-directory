import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskVolumeHostDetails } from "./awsecstaskvolumehostdetails";
/**
 * Provides information about a data volume that's used in a task definition.
 */
export declare class AwsEcsTaskVolumeDetails extends SpeakeasyBase {
    host?: AwsEcsTaskVolumeHostDetails;
    name?: string;
}
