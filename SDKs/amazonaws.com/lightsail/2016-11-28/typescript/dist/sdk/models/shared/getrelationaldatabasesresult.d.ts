import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabase } from "./relationaldatabase";
/**
 * Success
 */
export declare class GetRelationalDatabasesResult extends SpeakeasyBase {
    nextPageToken?: string;
    relationalDatabases?: RelationalDatabase[];
}
