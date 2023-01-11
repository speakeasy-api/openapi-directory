import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";



// DbSubnetGroup
/** 
 * Detailed information about a subnet group. 
**/
export class DbSubnetGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSubnetGroupArn?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupDescription?: string;

  @SpeakeasyMetadata()
  dbSubnetGroupName?: string;

  @SpeakeasyMetadata()
  subnetGroupStatus?: string;

  @SpeakeasyMetadata({ elemType: SubnetList })
  subnets?: SubnetList[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
