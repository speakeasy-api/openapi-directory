import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * Success
 */
export declare class ListDatabasesOutput extends SpeakeasyBase {
    databaseList?: Database[];
    nextToken?: string;
}
