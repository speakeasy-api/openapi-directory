import { SpeakeasyBase } from "../../../internal/utils";
import { UploadSummary } from "./uploadsummary";
/**
 * The type that defines the fields for the task details.
 */
export declare class Task extends SpeakeasyBase {
    /**
     * The timestamp when the task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report.
     */
    completionDate?: string;
    /**
     * The date the task was created.
     */
    creationDate?: string;
    /**
     * The path to the call URI used to retrieve the task. This field points to the GetOrderTask URI if the task is for <code>LMS_ORDER_REPORT</code> or will be null if this task is for <code>LMS_ORDER_ACK</code>.
     */
    detailHref?: string;
    /**
     * The feed type associated with the task.
     */
    feedType?: string;
    /**
     * The schema version number associated with the task.
     */
    schemaVersion?: string;
    /**
     * The enumeration value that indicates the state of the task that was submitted in the request. See <strong>FeedStatusEnum</strong> for information. <p>The values <code>COMPLETED </code>and<code> COMPLETED_WITH_ERROR</code> indicate the Order Report file is ready to download.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a>
     */
    status?: string;
    /**
     * The ID of the task that was submitted in the request.
     */
    taskId?: string;
    /**
     * This container provides summary information on an upload feed (not applicable for download feed types).
     */
    uploadSummary?: UploadSummary;
}
