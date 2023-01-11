import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSecurityGroups } from "./clustersecuritygroups";



// ClusterSecurityGroupMessage
/** 
 * <p/>
**/
export class ClusterSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterSecurityGroups })
  clusterSecurityGroups?: ClusterSecurityGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
