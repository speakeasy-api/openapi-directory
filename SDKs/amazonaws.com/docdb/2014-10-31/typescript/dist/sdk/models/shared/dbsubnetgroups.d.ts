import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";
/**
 * Detailed information about a subnet group.
 */
export declare class DBSubnetGroups extends SpeakeasyBase {
    dbSubnetGroupArn?: string;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: SubnetList[];
    vpcId?: string;
}
