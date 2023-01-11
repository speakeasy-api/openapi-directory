import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroup } from "./keygroup";



// KeyGroupSummaryList
/** 
 * Contains information about a key group.
**/
export class KeyGroupSummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroup: KeyGroup;
}
