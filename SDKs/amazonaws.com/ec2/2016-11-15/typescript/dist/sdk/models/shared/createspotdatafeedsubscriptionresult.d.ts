import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fault codes for the Spot Instance request, if any.
**/
export declare class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The Spot Instance data feed subscription.
**/
export declare class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription extends SpeakeasyBase {
    bucket?: Record<string, any>;
    fault?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault;
    ownerId?: Record<string, any>;
    prefix?: Record<string, any>;
    state?: Record<string, any>;
}
/**
 * Contains the output of CreateSpotDatafeedSubscription.
**/
export declare class CreateSpotDatafeedSubscriptionResult extends SpeakeasyBase {
    spotDatafeedSubscription?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription;
}
