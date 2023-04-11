import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
/**
 * Success
 */
export declare class QueryTableRowsResult extends SpeakeasyBase {
    columnIds: string[];
    nextToken?: string;
    rows: TableRow[];
    workbookCursor: number;
}
