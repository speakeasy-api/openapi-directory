import { SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";
import { ItemSummary } from "./itemsummary";
import { Person } from "./person";
/**
 * The type of PageEntry. Used to help identify what type of content will be presented.
 */
export declare enum PageEntryTypeEnum {
    ItemEntry = "ItemEntry",
    ItemDetailEntry = "ItemDetailEntry",
    ListEntry = "ListEntry",
    ListDetailEntry = "ListDetailEntry",
    UserEntry = "UserEntry",
    TextEntry = "TextEntry",
    ImageEntry = "ImageEntry",
    CustomEntry = "CustomEntry",
    PeopleEntry = "PeopleEntry"
}
/**
 * Represents an entry of a Page.
 *
 * @remarks
 * Defines what specific piece of content should be presented e.g. an Item or ItemList.
 * Also defines what visual template should be used to render that content.
 *
 */
export declare class PageEntry extends SpeakeasyBase {
    /**
     * A map of custom fields defined by a curator for a page entry.
     */
    customFields?: Record<string, any>;
    /**
     * The unique identifier for a page entry.
     */
    id: string;
    /**
     * The images for the page entry if any.
     *
     * @remarks
     *
     * For example the images of an `ImageEntry`.
     *
     */
    images?: Record<string, string>;
    item?: ItemSummary;
    /**
     * A pageable list of items.
     */
    list?: ItemList;
    /**
     * If 'type' is 'PeopleEntry' then this is the array of people to present.
     */
    people?: Person[];
    /**
     * Template type used to present the content of the PageEntry.
     */
    template: string;
    /**
     * If 'type' is 'TextEntry' then this is the text to be represented.
     */
    text?: string;
    /**
     * The name of the Page Entry.
     */
    title: string;
    /**
     * The type of PageEntry. Used to help identify what type of content will be presented.
     */
    type: PageEntryTypeEnum;
}
