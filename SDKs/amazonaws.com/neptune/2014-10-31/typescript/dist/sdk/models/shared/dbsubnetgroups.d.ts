import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";
/**
 * <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
**/
export declare class DbSubnetGroups extends SpeakeasyBase {
    dbSubnetGroupArn?: string;
    dbSubnetGroupDescription?: string;
    dbSubnetGroupName?: string;
    subnetGroupStatus?: string;
    subnets?: SubnetList[];
    vpcId?: string;
}
