import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
import { DestinyDestinyTalentNode } from "./destinydestinytalentnode";
/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this "live" data with the related DestinyProgressionDefinition for a full picture of the Progression.
 */
export declare class DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression extends SpeakeasyBase {
    /**
     * This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
     */
    currentProgress?: number;
    /**
     * The number of resets of this progression you've executed this season, if applicable to this progression.
     */
    currentResetCount?: number;
    /**
     * If this progression has a daily limit, this is that limit.
     */
    dailyLimit?: number;
    /**
     * The amount of progress earned today for this progression.
     */
    dailyProgress?: number;
    /**
     * This is the level of the progression (for instance, the Character Level).
     */
    level?: number;
    /**
     * This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
     */
    levelCap?: number;
    /**
     * The total amount of progression (i.e. "Experience") needed in order to reach the next level.
     */
    nextLevelAt?: number;
    /**
     * The amount of progression (i.e. "Experience") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
     */
    progressToNextLevel?: number;
    /**
     * The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
     */
    progressionHash?: number;
    /**
     * Information about historical rewards for this progression, if there is any data for it.
     */
    rewardItemStates?: number[];
    /**
     * Information about historical resets of this progression, if there is any data for it.
     */
    seasonResets?: DestinyDestinyProgressionResetEntry[];
    /**
     * Progressions define their levels in "steps". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the "steps" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
     */
    stepIndex?: number;
    /**
     * If this progression has a weekly limit, this is that limit.
     */
    weeklyLimit?: number;
    /**
     * The amount of progress earned toward this progression in the current week.
     */
    weeklyProgress?: number;
}
/**
 * Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
 *
 * @remarks
 * The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
 * An important note is that talent grids are defined as such:
 * A Grid has 1:M Nodes, which has 1:M Steps.
 * Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node is coming from the current Step of that node).
 * Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
 * See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
 */
export declare class DestinyEntitiesItemsDestinyItemTalentGridComponent extends SpeakeasyBase {
    /**
     * If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
     */
    gridProgression?: DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression;
    /**
     * Indicates whether the talent grid on this item is completed, and thus whether it should have a gold border around it.
     *
     * @remarks
     * Only will be true if the item actually *has* a talent grid, and only then if it is completed (i.e. every exclusive set has an activated node, and every non-exclusive set node has been activated)
     */
    isGridComplete?: boolean;
    /**
     * Detailed information about the individual nodes in the talent grid.
     *
     * @remarks
     * A node represents a single visual "pip" in the talent grid or Build detail view, though each node may have multiple "steps" which indicate the actual bonuses and visual representation of that node.
     */
    nodes?: DestinyDestinyTalentNode[];
    /**
     * Most items don't have useful talent grids anymore, but Builds in particular still do.
     *
     * @remarks
     * You can use this hash to lookup the DestinyTalentGridDefinition attached to this item, which will be crucial for understanding the node values on the item.
     */
    talentGridHash?: number;
}
