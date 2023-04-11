import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * Success
 */
export declare class GetDatabasesResponse extends SpeakeasyBase {
    databaseList: Database[];
    nextToken?: string;
}
