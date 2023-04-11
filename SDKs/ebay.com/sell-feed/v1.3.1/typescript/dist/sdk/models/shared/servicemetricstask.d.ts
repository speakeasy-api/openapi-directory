import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";
/**
 * Success
 */
export declare class ServiceMetricsTask extends SpeakeasyBase {
    /**
     * The timestamp when the customer service metrics task went into the <code>COMPLETED</code> or <code>COMPLETED_WITH_ERROR</code> state. This field is only returned if the status is one of the two completed values. This state means that eBay has compiled the report for the seller based on the seller’s filter criteria, and the seller can run a <strong>getResultFile</strong> call to download the report.
     */
    completionDate?: string;
    /**
     * The date the customer service metrics task was created.
     */
    creationDate?: string;
    /**
     * The relative <strong>getCustomerServiceMetricTask</strong> call URI path to retrieve the corresponding task.
     */
    detailHref?: string;
    /**
     * The feed type associated with the task.
     */
    feedType?: string;
    /**
     * A complex data type that filters data for report creation. See <strong>CustomerServiceMetricsFilterCriteria</strong> for fields and descriptions.
     */
    filterCriteria?: CustomerServiceMetricsFilterCriteria;
    /**
     * The schema version number of the file format. If omitted, the default value is used. <p><b>Default value: </b><code>1.0</code><p>
     */
    schemaVersion?: string;
    /**
     * An enumeration value that indicates the state of the task. See <strong>FeedStatusEnum</strong> for values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:FeedStatusEnum'>eBay API documentation</a>
     */
    status?: string;
    /**
     * The unique eBay-assigned ID of the task.
     */
    taskId?: string;
}
