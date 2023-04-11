import { SpeakeasyBase } from "../../../internal/utils";
import { ReportTask } from "./reporttask";
/**
 * This type defines the fields that paginate the reports tasks returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.
 */
export declare class ReportTaskPagedCollection extends SpeakeasyBase {
    /**
     * The URI of the current page of results from the result set.
     */
    href?: string;
    /**
     * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
     */
    limit?: number;
    /**
     * The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048
     */
    next?: string;
    /**
     * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</span>
     */
    offset?: number;
    /**
     * The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048
     */
    prev?: string;
    /**
     * A list of report tasks contained on this page from the paginated response.
     */
    reportTasks?: ReportTask[];
    /**
     * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
     */
    total?: number;
}
