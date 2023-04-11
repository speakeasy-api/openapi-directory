import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides details about the placement of an Amazon EC2 instance.
 */
export declare class AwsEc2LaunchTemplateDataPlacementDetails extends SpeakeasyBase {
    affinity?: string;
    availabilityZone?: string;
    groupName?: string;
    hostId?: string;
    hostResourceGroupArn?: string;
    partitionNumber?: number;
    spreadDomain?: string;
    tenancy?: string;
}
