import { SpeakeasyBase } from "../../../internal/utils";
import { SendMessageBatchRequestEntryList } from "./sendmessagebatchrequestentrylist";
/**
 * <p/>
 */
export declare class SendMessageBatchRequest extends SpeakeasyBase {
    entries: SendMessageBatchRequestEntryList[];
    queueUrl: string;
}
