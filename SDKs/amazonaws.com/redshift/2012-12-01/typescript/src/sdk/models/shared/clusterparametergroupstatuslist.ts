import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterStatus } from "./clusterparameterstatus";



// ClusterParameterGroupStatusList
/** 
 * Describes the status of a parameter group.
**/
export class ClusterParameterGroupStatusList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterParameterStatus })
  clusterParameterStatusList?: ClusterParameterStatus[];

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;

  @SpeakeasyMetadata()
  parameterGroupName?: string;
}
