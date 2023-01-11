import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2SecurityGroupList } from "./ec2securitygrouplist";



// CacheSecurityGroups
/** 
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
**/
export class CacheSecurityGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  cacheSecurityGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: Ec2SecurityGroupList })
  ec2SecurityGroups?: Ec2SecurityGroupList[];

  @SpeakeasyMetadata()
  ownerId?: string;
}
