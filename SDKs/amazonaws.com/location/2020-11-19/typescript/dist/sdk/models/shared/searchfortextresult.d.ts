import { SpeakeasyBase } from "../../../internal/utils";
import { Place } from "./place";
/**
 * Contains a search result from a text search query that is run on a place index resource.
 */
export declare class SearchForTextResult extends SpeakeasyBase {
    distance?: number;
    place: Place;
    placeId?: string;
    relevance?: number;
}
