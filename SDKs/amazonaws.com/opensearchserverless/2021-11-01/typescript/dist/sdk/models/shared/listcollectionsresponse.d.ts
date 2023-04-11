import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionSummary } from "./collectionsummary";
/**
 * Success
 */
export declare class ListCollectionsResponse extends SpeakeasyBase {
    collectionSummaries?: CollectionSummary[];
    nextToken?: string;
}
