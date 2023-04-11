import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Describes an Amazon EC2 security group.
 */
export declare class Ec2SecurityGroupList extends SpeakeasyBase {
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
    status?: string;
    tags?: TagList[];
}
