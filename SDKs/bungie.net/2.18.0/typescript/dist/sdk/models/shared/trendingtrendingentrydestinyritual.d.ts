import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";
/**
 * Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
 */
export declare class TrendingTrendingEntryDestinyRitualEventContent extends SpeakeasyBase {
    /**
     * The "About this Milestone" text from the Firehose.
     */
    about?: string;
    /**
     * If DPS has defined items related to this Milestone, they can categorize those items in the Firehose. That data will then be returned as item categories here.
     */
    itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[];
    /**
     * The Current Status of the Milestone, as driven by the Firehose.
     */
    status?: string;
    /**
     * A list of tips, provided by the Firehose.
     */
    tips?: string[];
}
/**
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
 */
export declare class TrendingTrendingEntryDestinyRitualMilestoneDetails extends SpeakeasyBase {
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
export declare class TrendingTrendingEntryDestinyRitual extends SpeakeasyBase {
    dateEnd?: Date;
    dateStart?: Date;
    /**
     * A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
     */
    eventContent?: TrendingTrendingEntryDestinyRitualEventContent;
    icon?: string;
    image?: string;
    /**
     * A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
     */
    milestoneDetails?: TrendingTrendingEntryDestinyRitualMilestoneDetails;
    subtitle?: string;
    title?: string;
}
