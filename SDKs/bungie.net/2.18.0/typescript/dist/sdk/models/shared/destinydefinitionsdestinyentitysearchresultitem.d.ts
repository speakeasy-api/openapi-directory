import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsCommonDestinyIconSequenceDefinition } from "./destinydefinitionscommondestinyiconsequencedefinition";
/**
 * Many Destiny*Definition contracts - the "first order" entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
 */
export declare class DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties extends SpeakeasyBase {
    description?: string;
    hasIcon?: boolean;
    /**
     * If this item has a high-res icon (at least for now, many things won't), then the path to that icon will be here.
     */
    highResIcon?: string;
    /**
     * Note that "icon" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.
     *
     * @remarks
     * But usually, it will be a small square image that you can use as... well, an icon.
     * They are currently represented as 96px x 96px images.
     */
    icon?: string;
    iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[];
    name?: string;
}
/**
 * An individual Destiny Entity returned from the entity search.
 */
export declare class DestinyDefinitionsDestinyEntitySearchResultItem extends SpeakeasyBase {
    /**
     * Basic display properties on the entity, so you don't have to look up the definition to show basic results for the item.
     */
    displayProperties?: DestinyDefinitionsDestinyEntitySearchResultItemDisplayProperties;
    /**
     * The type of entity, returned as a string matching the DestinyDefinition's contract class name. You'll have to have your own mapping from class names to actually looking up those definitions in the manifest databases.
     */
    entityType?: string;
    /**
     * The hash identifier of the entity. You will use this to look up the DestinyDefinition relevant for the entity found.
     */
    hash?: number;
    /**
     * The ranking value for sorting that we calculated using our relevance formula. This will hopefully get better with time and iteration.
     */
    weight?: number;
}
