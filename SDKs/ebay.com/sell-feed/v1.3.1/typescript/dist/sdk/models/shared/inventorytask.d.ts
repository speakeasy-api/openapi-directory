import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";
import { UploadSummary } from "./uploadsummary";
/**
 * Success
 */
export declare class InventoryTask extends SpeakeasyBase {
    /**
     * The timestamp when the task <strong>status</strong> went into the <code>COMPLETED</code>, <code>COMPLETED_WITH_ERROR</code>, or <code>PARTIALLY_PROCESSED</code> state. This field is only returned if the status is one of the three completed values.
     */
    completionDate?: string;
    /**
     * The date the task was created.
     */
    creationDate?: string;
    /**
     * The path to the call URI used to retrieve the task. This field points to the <strong>getInventoryTask</strong> URI.
     */
    detailHref?: string;
    /**
     * The feed type associated with the inventory task.
     */
    feedType?: string;
    /**
     * The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can retrieve listings for a specified format.
     */
    filterCriteria?: InventoryFilterCriteria;
    /**
     * The schema version number associated with the task.
     */
    schemaVersion?: string;
    /**
     * The status of the task. Users must wait until status is complete before moving on to the next step (such as uploading/downloading a file). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a>
     */
    status?: string;
    /**
     * The ID of the task. This ID is generated when the task was created by the <strong>createInventoryTask</strong> method.
     */
    taskId?: string;
    /**
     * This container provides summary information on an upload feed (not applicable for download feed types).
     */
    uploadSummary?: UploadSummary;
}
