import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeList } from "./reservednodelist";



// ReservedNodesMessage
/** 
 * <p/>
**/
export class ReservedNodesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedNodeList })
  reservedNodes?: ReservedNodeList[];
}
