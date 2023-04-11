import { SpeakeasyBase } from "../../../internal/utils";
import { FailedBatchItem } from "./failedbatchitem";
import { UpsertRowsResult } from "./upsertrowsresult";
/**
 * Success
 */
export declare class BatchUpsertTableRowsResult extends SpeakeasyBase {
    failedBatchItems?: FailedBatchItem[];
    rows: Record<string, UpsertRowsResult>;
    workbookCursor: number;
}
