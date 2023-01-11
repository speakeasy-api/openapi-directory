import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntryList } from "./batchresulterrorentrylist";
import { DeleteMessageBatchResultEntryList } from "./deletemessagebatchresultentrylist";



// DeleteMessageBatchResult
/** 
 * For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
**/
export class DeleteMessageBatchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BatchResultErrorEntryList })
  failed: BatchResultErrorEntryList[];

  @SpeakeasyMetadata({ elemType: DeleteMessageBatchResultEntryList })
  successful: DeleteMessageBatchResultEntryList[];
}
