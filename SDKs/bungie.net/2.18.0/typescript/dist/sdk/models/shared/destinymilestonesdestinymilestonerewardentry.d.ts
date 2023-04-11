import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
 */
export declare class DestinyMilestonesDestinyMilestoneRewardEntry extends SpeakeasyBase {
    /**
     * If TRUE, the player has earned this reward.
     */
    earned?: boolean;
    /**
     * If TRUE, the player has redeemed/picked up/obtained this reward. Feel free to alias this to "gotTheShinyBauble" in your own codebase.
     */
    redeemed?: boolean;
    /**
     * The identifier for the reward entry in question. It is important to look up the related DestinyMilestoneRewardEntryDefinition to get the static details about the reward, which you can do by looking up the milestone's DestinyMilestoneDefinition and examining the DestinyMilestoneDefinition.rewards[rewardCategoryHash].rewardEntries[rewardEntryHash] data.
     */
    rewardEntryHash?: number;
}
