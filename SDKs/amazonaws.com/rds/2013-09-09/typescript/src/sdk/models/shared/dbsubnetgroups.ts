import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetList } from "./subnetlist";



export class DbSubnetGroups extends SpeakeasyBase {
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
