import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyArtifactsDestinyArtifactTier } from "./destinyartifactsdestinyartifacttier";
import { DestinyDestinyProgression } from "./destinydestinyprogression";
import { DestinyEntitiesItemsDestinyItemPerksComponent } from "./destinyentitiesitemsdestinyitemperkscomponent";
import { DestinyMilestonesDestinyMilestone } from "./destinymilestonesdestinymilestone";
import { DestinyProgressionDestinyFactionProgression } from "./destinyprogressiondestinyfactionprogression";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
import { DestinyQuestsDestinyQuestStatus } from "./destinyquestsdestinyqueststatus";
/**
 * Data related to your progress on the current season's artifact that can vary per character.
 */
export declare class DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact extends SpeakeasyBase {
    artifactHash?: number;
    pointsUsed?: number;
    resetCount?: number;
    tiers?: DestinyArtifactsDestinyArtifactTier[];
}
/**
 * This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
 */
export declare class DestinyEntitiesCharactersDestinyCharacterProgressionComponent extends SpeakeasyBase {
    /**
     * The set of checklists that can be examined for this specific character, keyed by the hash identifier of the Checklist (DestinyChecklistDefinition)
     *
     * @remarks
     * For each checklist returned, its value is itself a Dictionary keyed by the checklist's hash identifier with the value being a boolean indicating if it's been discovered yet.
     */
    checklists?: Record<string, Record<string, boolean>>;
    /**
     * A dictionary of all known Factions, keyed by the Faction's hash. It contains data about this character's status with the faction.
     */
    factions?: Record<string, DestinyProgressionDestinyFactionProgression>;
    /**
     * Milestones are related to the simple progressions shown in the game, but return additional and hopefully helpful information for users about the specifics of the Milestone's status.
     */
    milestones?: Record<string, DestinyMilestonesDestinyMilestone>;
    /**
     * A Dictionary of all known progressions for the Character, keyed by the Progression's hash.
     *
     * @remarks
     * Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
     */
    progressions?: Record<string, DestinyDestinyProgression>;
    /**
     * If the user has any active quests, the quests' statuses will be returned here.
     *
     * @remarks
     *  Note that quests have been largely supplanted by Milestones, but that doesn't mean that they won't make a comeback independent of milestones at some point.
     *  (Fun fact: quests came back as I feared they would, but we never looped back to populate this... I'm going to put that in the backlog.)
     */
    quests?: DestinyQuestsDestinyQuestStatus[];
    /**
     * Data related to your progress on the current season's artifact that can vary per character.
     */
    seasonalArtifact?: DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact;
    /**
     * Sometimes, you have items in your inventory that don't have instances, but still have Objective information. This provides you that objective information for uninstanced items.
     *
     * @remarks
     * This dictionary is keyed by the item's hash: which you can use to look up the name and description for the overall task(s) implied by the objective. The value is the list of objectives for this item, and their statuses.
     */
    uninstancedItemObjectives?: Record<string, DestinyQuestsDestinyObjectiveProgress[]>;
    /**
     * Sometimes, you have items in your inventory that don't have instances, but still have perks (for example: Trials passage cards). This gives you the perk information for uninstanced items.
     *
     * @remarks
     * This dictionary is keyed by item hash, which you can use to look up the corresponding item definition. The value is the list of perks states for the item.
     */
    uninstancedItemPerks?: Record<string, DestinyEntitiesItemsDestinyItemPerksComponent>;
}
