import { SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";
import { Person } from "./person";
/**
 * OK.
 */
export declare class SearchResults extends SpeakeasyBase {
    /**
     * A pageable list of items.
     */
    items?: ItemList;
    /**
     * A pageable list of items.
     */
    movies?: ItemList;
    /**
     * A pageable list of items.
     */
    other?: ItemList;
    /**
     * The list of people relevant to the search term.
     */
    people?: Person[];
    /**
     * The search term.
     */
    term: string;
    /**
     * The total number of results.
     */
    total: number;
    /**
     * A pageable list of items.
     */
    tv?: ItemList;
}
