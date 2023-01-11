import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// ParameterGroupList
/** 
 * Describes a parameter group.
**/
export class ParameterGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  parameterGroupFamily?: string;

  @SpeakeasyMetadata()
  parameterGroupName?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
