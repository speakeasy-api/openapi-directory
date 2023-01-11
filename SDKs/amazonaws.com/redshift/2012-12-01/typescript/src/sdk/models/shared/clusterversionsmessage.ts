import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterVersionList } from "./clusterversionlist";



// ClusterVersionsMessage
/** 
 * Contains the output from the <a>DescribeClusterVersions</a> action. 
**/
export class ClusterVersionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterVersionList })
  clusterVersions?: ClusterVersionList[];

  @SpeakeasyMetadata()
  marker?: string;
}
