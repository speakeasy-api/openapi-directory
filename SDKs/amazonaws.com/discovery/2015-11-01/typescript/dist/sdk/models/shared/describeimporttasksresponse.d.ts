import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTask } from "./importtask";
/**
 * Success
 */
export declare class DescribeImportTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: ImportTask[];
}
