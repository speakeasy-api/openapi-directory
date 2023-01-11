import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fault codes for the Spot Instance request, if any.
**/
export declare class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
/**
 * The Spot Instance data feed subscription.
**/
export declare class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription extends SpeakeasyBase {
    bucket?: Record<string, any>;
    fault?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault;
    ownerId?: Record<string, any>;
    prefix?: Record<string, any>;
    state?: Record<string, any>;
}
/**
 * Contains the output of DescribeSpotDatafeedSubscription.
**/
export declare class DescribeSpotDatafeedSubscriptionResult extends SpeakeasyBase {
    spotDatafeedSubscription?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription;
}
