import { SpeakeasyBase } from "../../../internal/utils";
import { ItemSummary } from "./itemsummary";
import { ListData } from "./listdata";
import { Pagination } from "./pagination";
import { Theme } from "./theme";
export declare enum ItemListItemTypesEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
/**
 * A pageable list of items.
 */
export declare class ItemList extends SpeakeasyBase {
    /**
     * A map of custom fields defined by a curator for a list.
     */
    customFields?: Record<string, any>;
    /**
     * A full description of this list.
     */
    description?: string;
    /**
     * The id of this list
     */
    id: string;
    images?: Record<string, string>;
    /**
     * The types of items in the list
     */
    itemTypes?: ItemListItemTypesEnum[];
    /**
     * A list of items
     */
    items: ItemSummary[];
    /**
     * Extra data to accompany ItemList content. The (single) key in the object is
     *
     * @remarks
     * the list name and the data changes depending on the list
     *
     */
    listData?: ListData;
    paging: Pagination;
    /**
     * If this list is parameterized, then this contains the parameter of the list in the format `name:value`.
     *
     * @remarks
     * For example the Movies Genre list will take a parameter `genre` with a given value. e.g. `genre:action` or `genre:drama`.
     */
    parameter?: string;
    /**
     * The path of this list
     */
    path: string;
    /**
     * A short description of this list.
     */
    shortDescription?: string;
    /**
     * The total size of the list
     */
    size: number;
    /**
     * The tagline of the item.
     */
    tagline?: string;
    themes?: Theme[];
    /**
     * The title of this list
     */
    title?: string;
}
