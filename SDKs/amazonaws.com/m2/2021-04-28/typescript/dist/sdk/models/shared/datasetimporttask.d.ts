import { SpeakeasyBase } from "../../../internal/utils";
import { DataSetImportSummary } from "./datasetimportsummary";
import { DataSetTaskLifecycleEnum } from "./datasettasklifecycleenum";
/**
 * Contains information about a data set import task.
 */
export declare class DataSetImportTask extends SpeakeasyBase {
    status: DataSetTaskLifecycleEnum;
    summary: DataSetImportSummary;
    taskId: string;
}
