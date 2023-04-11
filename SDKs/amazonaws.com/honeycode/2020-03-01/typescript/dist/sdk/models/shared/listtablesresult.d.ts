import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Success
 */
export declare class ListTablesResult extends SpeakeasyBase {
    nextToken?: string;
    tables: Table[];
    workbookCursor?: number;
}
