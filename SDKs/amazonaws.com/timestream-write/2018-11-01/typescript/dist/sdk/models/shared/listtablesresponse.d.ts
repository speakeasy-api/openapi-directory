import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Success
 */
export declare class ListTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tables?: Table[];
}
