import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your Amazon Web Services account. This data is available only if you enabled the Deliverability dashboard for the domain.
 */
export declare class InboxPlacementTrackingOption extends SpeakeasyBase {
    global?: boolean;
    trackedIsps?: string[];
}
