import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";
import { TagList } from "./taglist";
/**
 * Describes a subnet group.
 */
export declare class ClusterSubnetGroup extends SpeakeasyBase {
    clusterSubnetGroupName?: string;
    description?: string;
    subnetGroupStatus?: string;
    subnets?: SubnetList[];
    tags?: TagList[];
    vpcId?: string;
}
