import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// IpRangeList
/** 
 * Describes an IP range used in a security group.
**/
export class IpRangeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrip?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
