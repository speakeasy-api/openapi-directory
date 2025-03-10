import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";
/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
 */
export declare class CacheSecurityGroups extends SpeakeasyBase {
    arn?: string;
    cacheSecurityGroupName?: string;
    description?: string;
    ec2SecurityGroups?: Ec2SecurityGroupList[];
    ownerId?: string;
}
