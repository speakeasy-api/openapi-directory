import { SpeakeasyBase } from "../../../internal/utils";
import { DataSetImportSummary } from "./datasetimportsummary";
import { DataSetTaskLifecycleEnum } from "./datasettasklifecycleenum";
/**
 * Success
 */
export declare class GetDataSetImportTaskResponse extends SpeakeasyBase {
    status: DataSetTaskLifecycleEnum;
    summary?: DataSetImportSummary;
    taskId: string;
}
