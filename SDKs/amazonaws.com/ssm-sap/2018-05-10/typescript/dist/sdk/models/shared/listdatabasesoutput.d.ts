import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseSummary } from "./databasesummary";
/**
 * Success
 */
export declare class ListDatabasesOutput extends SpeakeasyBase {
    databases?: DatabaseSummary[];
    nextToken?: string;
}
