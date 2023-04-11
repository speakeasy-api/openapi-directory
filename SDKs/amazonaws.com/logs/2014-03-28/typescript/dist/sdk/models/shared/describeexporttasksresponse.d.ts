import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";
/**
 * Success
 */
export declare class DescribeExportTasksResponse extends SpeakeasyBase {
    exportTasks?: ExportTask[];
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
}
