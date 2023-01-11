import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterOptionGroupMemberships
/** 
 * Not supported by Neptune.
**/
export class DbClusterOptionGroupMemberships extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterOptionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
