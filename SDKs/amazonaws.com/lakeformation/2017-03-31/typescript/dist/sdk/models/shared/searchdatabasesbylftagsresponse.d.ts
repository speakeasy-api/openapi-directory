import { SpeakeasyBase } from "../../../internal/utils";
import { TaggedDatabase } from "./taggeddatabase";
/**
 * Success
 */
export declare class SearchDatabasesByLFTagsResponse extends SpeakeasyBase {
    databaseList?: TaggedDatabase[];
    nextToken?: string;
}
