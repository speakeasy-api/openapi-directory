import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterGroupList } from "./parametergrouplist";



// ClusterParameterGroupsMessage
/** 
 * Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
**/
export class ClusterParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParameterGroupList })
  parameterGroups?: ParameterGroupList[];
}
