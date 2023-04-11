import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";
/**
 * Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
 */
export declare class DestinyMilestonesDestinyMilestoneContent extends SpeakeasyBase {
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
