import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterParameterGroupList
/** 
 * Detailed information about a cluster parameter group. 
**/
export class DbClusterParameterGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroupArn?: string;

  @SpeakeasyMetadata()
  dbClusterParameterGroupName?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  description?: string;
}
