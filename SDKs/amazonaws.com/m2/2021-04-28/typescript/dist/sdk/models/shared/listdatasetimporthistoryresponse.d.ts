import { SpeakeasyBase } from "../../../internal/utils";
import { DataSetImportTask } from "./datasetimporttask";
/**
 * Success
 */
export declare class ListDataSetImportHistoryResponse extends SpeakeasyBase {
    dataSetImportTasks: DataSetImportTask[];
    nextToken?: string;
}
