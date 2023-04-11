import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseEvent } from "./relationaldatabaseevent";
/**
 * Success
 */
export declare class GetRelationalDatabaseEventsResult extends SpeakeasyBase {
    nextPageToken?: string;
    relationalDatabaseEvents?: RelationalDatabaseEvent[];
}
