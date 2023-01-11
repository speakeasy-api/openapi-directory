import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupList } from "./dbparametergrouplist";



// DbParameterGroupsMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action. 
**/
export class DbParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbParameterGroupList })
  dbParameterGroups?: DbParameterGroupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
