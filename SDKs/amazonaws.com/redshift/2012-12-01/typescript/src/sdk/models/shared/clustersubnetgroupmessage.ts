import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSubnetGroups } from "./clustersubnetgroups";



// ClusterSubnetGroupMessage
/** 
 * Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
**/
export class ClusterSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterSubnetGroups })
  clusterSubnetGroups?: ClusterSubnetGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
