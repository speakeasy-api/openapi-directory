import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// ClusterParameterGroup
/** 
 * Describes a parameter group.
**/
export class ClusterParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  parameterGroupFamily?: string;

  @SpeakeasyMetadata()
  parameterGroupName?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
