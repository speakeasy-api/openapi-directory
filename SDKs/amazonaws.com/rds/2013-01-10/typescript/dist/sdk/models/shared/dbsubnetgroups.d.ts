import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";
export declare class DBSubnetGroups extends SpeakeasyBase {
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: SubnetList[];
    vpcId?: string;
}
