import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginGroupMemberList } from "./origingroupmemberlist";



// OriginGroupMembers
/** 
 * A complex data type for the origins included in an origin group.
**/
export class OriginGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginGroupMemberList })
  items: OriginGroupMemberList[];

  @SpeakeasyMetadata()
  quantity: number;
}
