import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";
/**
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
 */
export declare class DestinyMilestonesDestinyPublicMilestone extends SpeakeasyBase {
    activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[];
    /**
     * A milestone not need have even a single quest, but if there are active quests they will be returned here.
     */
    availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[];
    /**
     * If known, this is the date when the Milestone will expire/recycle/end.
     */
    endDate?: Date;
    /**
     * The hash identifier for the milestone. Use it to look up the DestinyMilestoneDefinition for static data about the Milestone.
     */
    milestoneHash?: number;
    /**
     * Used for ordering milestones in a display to match how we order them in BNet. May pull from static data, or possibly in the future from dynamic information.
     */
    order?: number;
    /**
     * If known, this is the date when the Milestone started/became active.
     */
    startDate?: Date;
    /**
     * Sometimes milestones - or activities active in milestones - will have relevant vendors. These are the vendors that are currently relevant.
     *
     * @remarks
     * Deprecated, already, for the sake of the new "vendors" property that has more data. What was I thinking.
     */
    vendorHashes?: number[];
    /**
     * This is why we can't have nice things. This is the ordered list of vendors to be shown that relate to this milestone, potentially along with other interesting data.
     */
    vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[];
}
