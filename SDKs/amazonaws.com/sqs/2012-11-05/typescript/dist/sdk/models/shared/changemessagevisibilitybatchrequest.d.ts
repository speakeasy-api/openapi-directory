import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeMessageVisibilityBatchRequestEntryList } from "./changemessagevisibilitybatchrequestentrylist";
/**
 * <p/>
 */
export declare class ChangeMessageVisibilityBatchRequest extends SpeakeasyBase {
    entries: ChangeMessageVisibilityBatchRequestEntryList[];
    queueUrl: string;
}
