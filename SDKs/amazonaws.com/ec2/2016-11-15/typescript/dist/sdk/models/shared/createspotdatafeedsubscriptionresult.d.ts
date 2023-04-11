import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fault codes for the Spot Instance request, if any.
 */
export declare class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the Spot Instance data feed subscription.
 */
export declare enum CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionStateEnum {
    Active = "Active",
    Inactive = "Inactive"
}
/**
 * The Spot Instance data feed subscription.
 */
export declare class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription extends SpeakeasyBase {
    bucket?: string;
    fault?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault;
    ownerId?: string;
    prefix?: string;
    state?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionStateEnum;
}
/**
 * Contains the output of CreateSpotDatafeedSubscription.
 */
export declare class CreateSpotDatafeedSubscriptionResult extends SpeakeasyBase {
    spotDatafeedSubscription?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription;
}
