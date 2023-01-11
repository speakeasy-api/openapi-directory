import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";
import { TagList } from "./taglist";



// ClusterSubnetGroup
/** 
 * Describes a subnet group.
**/
export class ClusterSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSubnetGroupName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ elemType: SubnetList })
  subnets?: SubnetList[];

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
