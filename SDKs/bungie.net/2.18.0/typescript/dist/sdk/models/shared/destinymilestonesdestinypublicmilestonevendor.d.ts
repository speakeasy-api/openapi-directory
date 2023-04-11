import { SpeakeasyBase } from "../../../internal/utils";
export declare class DestinyMilestonesDestinyPublicMilestoneVendor extends SpeakeasyBase {
    /**
     * If this vendor is featuring a specific item for this event, this will be the hash identifier of that item. I'm taking bets now on how long we go before this needs to be a list or some other, more complex representation instead and I deprecate this too. I'm going to go with 5 months. Calling it now, 2017-09-14 at 9:46pm PST.
     */
    previewItemHash?: number;
    /**
     * The hash identifier of the Vendor related to this Milestone. You can show useful things from this, such as thier Faction icon or whatever you might care about.
     */
    vendorHash?: number;
}
