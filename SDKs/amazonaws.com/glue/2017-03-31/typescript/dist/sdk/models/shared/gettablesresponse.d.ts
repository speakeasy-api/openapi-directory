import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Success
 */
export declare class GetTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tableList?: Table[];
}
