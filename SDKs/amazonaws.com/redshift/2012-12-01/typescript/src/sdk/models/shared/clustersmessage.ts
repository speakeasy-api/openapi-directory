import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterList } from "./clusterlist";



// ClustersMessage
/** 
 * Contains the output from the <a>DescribeClusters</a> action. 
**/
export class ClustersMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterList })
  clusters?: ClusterList[];

  @SpeakeasyMetadata()
  marker?: string;
}
