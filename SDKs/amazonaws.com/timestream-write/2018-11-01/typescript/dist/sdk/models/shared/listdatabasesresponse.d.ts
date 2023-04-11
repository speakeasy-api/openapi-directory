import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * Success
 */
export declare class ListDatabasesResponse extends SpeakeasyBase {
    databases?: Database[];
    nextToken?: string;
}
