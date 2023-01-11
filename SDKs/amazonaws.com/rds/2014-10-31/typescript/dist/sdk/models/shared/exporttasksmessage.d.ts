import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTasksList } from "./exporttaskslist";
export declare class ExportTasksMessage extends SpeakeasyBase {
    exportTasks?: ExportTasksList[];
    marker?: string;
}
