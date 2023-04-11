import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Success
 */
export declare class SearchTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tableList?: Table[];
}
