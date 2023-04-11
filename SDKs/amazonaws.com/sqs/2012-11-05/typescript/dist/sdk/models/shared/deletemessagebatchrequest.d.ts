import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteMessageBatchRequestEntryList } from "./deletemessagebatchrequestentrylist";
/**
 * <p/>
 */
export declare class DeleteMessageBatchRequest extends SpeakeasyBase {
    entries: DeleteMessageBatchRequestEntryList[];
    queueUrl: string;
}
