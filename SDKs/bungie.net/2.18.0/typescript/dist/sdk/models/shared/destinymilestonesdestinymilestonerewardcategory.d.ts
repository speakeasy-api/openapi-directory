import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneRewardEntry } from "./destinymilestonesdestinymilestonerewardentry";
/**
 * Represents a category of "summary" rewards that can be earned for the Milestone regardless of specific quest rewards that can be earned.
 */
export declare class DestinyMilestonesDestinyMilestoneRewardCategory extends SpeakeasyBase {
    /**
     * The individual reward entries for this category, and their status.
     */
    entries?: DestinyMilestonesDestinyMilestoneRewardEntry[];
    /**
     * Look up the relevant DestinyMilestoneDefinition, and then use rewardCategoryHash to look up the category info in DestinyMilestoneDefinition.rewards.
     */
    rewardCategoryHash?: number;
}
