import { SpeakeasyBase } from "../../../internal/utils";
import { StoredQueryMetadata } from "./storedquerymetadata";
/**
 * Success
 */
export declare class ListStoredQueriesResponse extends SpeakeasyBase {
    nextToken?: string;
    storedQueryMetadata?: StoredQueryMetadata[];
}
