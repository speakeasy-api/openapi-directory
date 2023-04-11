import { SpeakeasyBase } from "../../../internal/utils";
import { TableSummary } from "./tablesummary";
/**
 * Success
 */
export declare class ListTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tables?: TableSummary[];
}
