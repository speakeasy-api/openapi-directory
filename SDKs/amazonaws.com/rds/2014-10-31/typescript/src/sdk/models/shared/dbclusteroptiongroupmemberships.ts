import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterOptionGroupMemberships
/** 
 * Contains status information for a DB cluster option group.
**/
export class DbClusterOptionGroupMemberships extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterOptionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
