import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationPendingModifiedValues } from "./replicationpendingmodifiedvalues";
import { ReplicationSubnetGroup } from "./replicationsubnetgroup";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
/**
 * Provides information that defines a replication instance.
**/
export declare class ReplicationInstance extends SpeakeasyBase {
    allocatedStorage?: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dnsNameServers?: string;
    engineVersion?: string;
    freeUntil?: Date;
    instanceCreateTime?: Date;
    kmsKeyId?: string;
    multiAZ?: boolean;
    pendingModifiedValues?: ReplicationPendingModifiedValues;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    replicationInstanceArn?: string;
    replicationInstanceClass?: string;
    replicationInstanceIdentifier?: string;
    replicationInstancePrivateIpAddress?: Record<string, any>;
    replicationInstancePrivateIpAddresses?: string[];
    replicationInstancePublicIpAddress?: Record<string, any>;
    replicationInstancePublicIpAddresses?: string[];
    replicationInstanceStatus?: string;
    replicationSubnetGroup?: ReplicationSubnetGroup;
    secondaryAvailabilityZone?: string;
    vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
