import { SpeakeasyBase } from "../../../internal/utils";
import { CellInput } from "./cellinput";
import { Filter } from "./filter";
/**
 *  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request.
 */
export declare class UpsertRowData extends SpeakeasyBase {
    batchItemId: string;
    cellsToUpdate: Record<string, CellInput>;
    filter: Filter;
}
