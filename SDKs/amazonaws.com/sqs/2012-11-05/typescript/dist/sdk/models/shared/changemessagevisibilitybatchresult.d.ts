import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntryList } from "./batchresulterrorentrylist";
import { ChangeMessageVisibilityBatchResultEntryList } from "./changemessagevisibilitybatchresultentrylist";
/**
 * For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
export declare class ChangeMessageVisibilityBatchResult extends SpeakeasyBase {
    failed: BatchResultErrorEntryList[];
    successful: ChangeMessageVisibilityBatchResultEntryList[];
}
