import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * Describes a Redshift-managed VPC endpoint.
**/
export declare class EndpointAccess extends SpeakeasyBase {
    address?: string;
    clusterIdentifier?: string;
    endpointCreateTime?: Date;
    endpointName?: string;
    endpointStatus?: string;
    port?: number;
    resourceOwner?: string;
    subnetGroupName?: string;
    vpcEndpoint?: VpcEndpoint;
    vpcSecurityGroups?: VpcSecurityGroupMembershipList[];
}
