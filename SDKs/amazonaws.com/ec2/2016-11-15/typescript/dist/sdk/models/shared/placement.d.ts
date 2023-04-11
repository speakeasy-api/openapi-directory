import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The tenancy of the instance (if the instance is running in a VPC). An instance with a tenancy of <code>dedicated</code> runs on single-tenant hardware.</p> <p>This parameter is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFleet">CreateFleet</a>. The <code>host</code> tenancy is not supported for <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html">ImportInstance</a> or for T3 instances that are configured for the <code>unlimited</code> CPU credit option.</p>
 */
export declare enum PlacementTenancyEnum {
    Default = "default",
    Dedicated = "dedicated",
    Host = "host"
}
/**
 * Describes the placement of an instance.
 */
export declare class Placement extends SpeakeasyBase {
    affinity?: string;
    availabilityZone?: string;
    groupId?: string;
    groupName?: string;
    hostId?: string;
    hostResourceGroupArn?: string;
    partitionNumber?: number;
    spreadDomain?: string;
    tenancy?: PlacementTenancyEnum;
}
