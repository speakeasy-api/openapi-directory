import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntryList } from "./batchresulterrorentrylist";
import { ChangeMessageVisibilityBatchResultEntryList } from "./changemessagevisibilitybatchresultentrylist";



// ChangeMessageVisibilityBatchResult
/** 
 * For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
export class ChangeMessageVisibilityBatchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BatchResultErrorEntryList })
  failed: BatchResultErrorEntryList[];

  @SpeakeasyMetadata({ elemType: ChangeMessageVisibilityBatchResultEntryList })
  successful: ChangeMessageVisibilityBatchResultEntryList[];
}
