import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterParameterGroupList } from "./dbclusterparametergrouplist";



// DbClusterParameterGroupsMessage
/** 
 * <p/>
**/
export class DbClusterParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterParameterGroupList })
  dbClusterParameterGroups?: DbClusterParameterGroupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
