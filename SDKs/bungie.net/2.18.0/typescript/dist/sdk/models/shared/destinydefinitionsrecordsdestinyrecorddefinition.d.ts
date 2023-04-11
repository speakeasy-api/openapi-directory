import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from "./destinydefinitionscommondestinydisplaypropertiesdefinition";
import { DestinyDefinitionsPresentationDestinyPresentationChildBlock } from "./destinydefinitionspresentationdestinypresentationchildblock";
import { DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock } from "./destinydefinitionspresentationdestinypresentationnoderequirementsblock";
import { DestinyDefinitionsRecordsDestinyRecordCompletionBlock } from "./destinydefinitionsrecordsdestinyrecordcompletionblock";
import { DestinyDefinitionsRecordsDestinyRecordExpirationBlock } from "./destinydefinitionsrecordsdestinyrecordexpirationblock";
import { DestinyDefinitionsRecordsDestinyRecordIntervalObjective } from "./destinydefinitionsrecordsdestinyrecordintervalobjective";
import { DestinyDefinitionsRecordsDestinyRecordIntervalRewards } from "./destinydefinitionsrecordsdestinyrecordintervalrewards";
import { DestinyDefinitionsRecordsDestinyRecordTitleBlock } from "./destinydefinitionsrecordsdestinyrecordtitleblock";
import { DestinyDefinitionsRecordsSchemaRecordStateBlock } from "./destinydefinitionsrecordsschemarecordstateblock";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
/**
 * Some records have multiple 'interval' objectives, and the record may be claimed at each completed interval
 */
export declare class DestinyDefinitionsRecordsDestinyRecordDefinitionIntervalInfo extends SpeakeasyBase {
    intervalObjectives?: DestinyDefinitionsRecordsDestinyRecordIntervalObjective[];
    intervalRewards?: DestinyDefinitionsRecordsDestinyRecordIntervalRewards[];
    originalObjectiveArrayInsertionIndex?: number;
}
export declare class DestinyDefinitionsRecordsDestinyRecordDefinition extends SpeakeasyBase {
    completionInfo?: DestinyDefinitionsRecordsDestinyRecordCompletionBlock;
    /**
     * Many Destiny*Definition contracts - the "first order" entities of Destiny that have their own tables in the Manifest Database - also have displayable information. This is the base class for that display information.
     */
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * If this record has an expiration after which it cannot be earned, this is some information about that expiration.
     */
    expirationInfo?: DestinyDefinitionsRecordsDestinyRecordExpirationBlock;
    forTitleGilding?: boolean;
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
    /**
     * Some records have multiple 'interval' objectives, and the record may be claimed at each completed interval
     */
    intervalInfo?: DestinyDefinitionsRecordsDestinyRecordDefinitionIntervalInfo;
    loreHash?: number;
    objectiveHashes?: number[];
    /**
     * A quick reference to presentation nodes that have this node as a child. Presentation nodes can be parented under multiple parents.
     */
    parentNodeHashes?: number[];
    presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock;
    presentationNodeType?: number;
    recordValueStyle?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
    /**
     * Presentation nodes can be restricted by various requirements. This defines the rules of those requirements, and the message(s) to be shown if these requirements aren't met.
     */
    requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock;
    /**
     * If there is any publicly available information about rewards earned for achieving this record, this is the list of those items.
     *
     * @remarks
     *  However, note that some records intentionally have "hidden" rewards. These will not be returned in this list.
     */
    rewardItems?: DestinyDestinyItemQuantity[];
    /**
     * Indicates whether this Record's state is determined on a per-character or on an account-wide basis.
     */
    scope?: number;
    /**
     * A hint to show a large icon for a reward
     */
    shouldShowLargeIcons?: boolean;
    stateInfo?: DestinyDefinitionsRecordsSchemaRecordStateBlock;
    titleInfo?: DestinyDefinitionsRecordsDestinyRecordTitleBlock;
    traitHashes?: number[];
    traitIds?: string[];
}
