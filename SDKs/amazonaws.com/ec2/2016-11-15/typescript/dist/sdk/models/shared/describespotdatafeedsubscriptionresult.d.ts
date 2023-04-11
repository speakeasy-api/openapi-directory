import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fault codes for the Spot Instance request, if any.
 */
export declare class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * The state of the Spot Instance data feed subscription.
 */
export declare enum DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionStateEnum {
    Active = "Active",
    Inactive = "Inactive"
}
/**
 * The Spot Instance data feed subscription.
 */
export declare class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription extends SpeakeasyBase {
    bucket?: string;
    fault?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault;
    ownerId?: string;
    prefix?: string;
    state?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionStateEnum;
}
/**
 * Contains the output of DescribeSpotDatafeedSubscription.
 */
export declare class DescribeSpotDatafeedSubscriptionResult extends SpeakeasyBase {
    spotDatafeedSubscription?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription;
}
