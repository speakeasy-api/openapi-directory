import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock } from "./destinydefinitionscollectiblesdestinycollectibleacquisitionblock";
import { DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock } from "./destinydefinitionscollectiblesdestinycollectiblestateblock";
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from "./destinydefinitionscommondestinydisplaypropertiesdefinition";
import { DestinyDefinitionsPresentationDestinyPresentationChildBlock } from "./destinydefinitionspresentationdestinypresentationchildblock";
/**
 * Defines a
 */
export declare class DestinyDefinitionsCollectiblesDestinyCollectibleDefinition extends SpeakeasyBase {
    acquisitionInfo?: DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock;
    /**
     * Many Destiny*Definition contracts - the "first order" entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
     */
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.
     *
     * @remarks
     * When entities refer to each other in Destiny content, it is this hash that they are referring to.
     */
    hash?: number;
    /**
     * The index of the entity as it was found in the investment tables.
     */
    index?: number;
    itemHash?: number;
    /**
     * A quick reference to presentation nodes that have this node as a child. Presentation nodes can be parented under multiple parents.
     */
    parentNodeHashes?: number[];
    presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock;
    presentationNodeType?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
    /**
     * Indicates whether the state of this Collectible is determined on a per-character or on an account-wide basis.
     */
    scope?: number;
    /**
     * This is a hash identifier we are building on the BNet side in an attempt to let people group collectibles by similar sources.
     *
     * @remarks
     * I can't promise that it's going to be 100% accurate, but if the designers were consistent in assigning the same source strings to items with the same sources, it *ought to* be. No promises though.
     * This hash also doesn't relate to an actual definition, just to note: we've got nothing useful other than the source string for this data.
     */
    sourceHash?: number;
    /**
     * A human readable string for a hint about how to acquire the item.
     */
    sourceString?: string;
    stateInfo?: DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock;
    traitHashes?: number[];
    traitIds?: string[];
}
