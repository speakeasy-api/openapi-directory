import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionFilters } from "./collectionfilters";
export declare class ListCollectionsRequest extends SpeakeasyBase {
    collectionFilters?: CollectionFilters;
    maxResults?: number;
    nextToken?: string;
}
