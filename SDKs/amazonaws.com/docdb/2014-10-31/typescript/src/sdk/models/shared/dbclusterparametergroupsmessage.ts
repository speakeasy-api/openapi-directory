import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroupList } from "./dbclusterparametergrouplist";



// DbClusterParameterGroupsMessage
/** 
 * Represents the output of <a>DBClusterParameterGroups</a>.
**/
export class DbClusterParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterParameterGroupList })
  dbClusterParameterGroups?: DbClusterParameterGroupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
