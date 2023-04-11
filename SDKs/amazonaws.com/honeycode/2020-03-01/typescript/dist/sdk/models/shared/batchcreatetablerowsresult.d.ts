import { SpeakeasyBase } from "../../../internal/utils";
import { FailedBatchItem } from "./failedbatchitem";
/**
 * Success
 */
export declare class BatchCreateTableRowsResult extends SpeakeasyBase {
    createdRows: Record<string, string>;
    failedBatchItems?: FailedBatchItem[];
    workbookCursor: number;
}
