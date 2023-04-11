import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTasksList } from "./exporttaskslist";
/**
 * Success
 */
export declare class ExportTasksMessage extends SpeakeasyBase {
    exportTasks?: ExportTasksList[];
    marker?: string;
}
