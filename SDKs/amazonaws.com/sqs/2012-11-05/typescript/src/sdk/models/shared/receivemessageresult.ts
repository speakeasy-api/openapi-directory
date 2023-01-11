import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageList } from "./messagelist";



// ReceiveMessageResult
/** 
 * A list of received messages.
**/
export class ReceiveMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MessageList })
  messages?: MessageList[];
}
