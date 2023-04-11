import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResultErrorEntryList } from "./batchresulterrorentrylist";
import { SendMessageBatchResultEntryList } from "./sendmessagebatchresultentrylist";
/**
 * For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
 */
export declare class SendMessageBatchResult extends SpeakeasyBase {
    failed: BatchResultErrorEntryList[];
    successful: SendMessageBatchResultEntryList[];
}
