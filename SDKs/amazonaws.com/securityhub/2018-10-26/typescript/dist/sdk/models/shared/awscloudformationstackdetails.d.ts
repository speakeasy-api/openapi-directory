import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFormationStackDriftInformationDetails } from "./awscloudformationstackdriftinformationdetails";
import { AwsCloudFormationStackOutputsDetails } from "./awscloudformationstackoutputsdetails";
/**
 * Nests a stack as a resource in a top-level template. Nested stacks are stacks created as resources for another stack.
 */
export declare class AwsCloudFormationStackDetails extends SpeakeasyBase {
    capabilities?: string[];
    creationTime?: string;
    description?: string;
    disableRollback?: boolean;
    driftInformation?: AwsCloudFormationStackDriftInformationDetails;
    enableTerminationProtection?: boolean;
    lastUpdatedTime?: string;
    notificationArns?: string[];
    outputs?: AwsCloudFormationStackOutputsDetails[];
    roleArn?: string;
    stackId?: string;
    stackName?: string;
    stackStatus?: string;
    stackStatusReason?: string;
    timeoutInMinutes?: number;
}
