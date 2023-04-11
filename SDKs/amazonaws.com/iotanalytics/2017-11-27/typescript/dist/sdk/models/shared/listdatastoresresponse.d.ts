import { SpeakeasyBase } from "../../../internal/utils";
import { DatastoreSummary } from "./datastoresummary";
/**
 * Success
 */
export declare class ListDatastoresResponse extends SpeakeasyBase {
    datastoreSummaries?: DatastoreSummary[];
    nextToken?: string;
}
