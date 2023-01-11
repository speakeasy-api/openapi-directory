import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
/** 
 * The fault codes for the Spot Instance request, if any.
**/
export class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription
/** 
 * The Spot Instance data feed subscription.
**/
export class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket?: Record<string, any>;

  @SpeakeasyMetadata()
  fault?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefix?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;
}


// DescribeSpotDatafeedSubscriptionResult
/** 
 * Contains the output of DescribeSpotDatafeedSubscription.
**/
export class DescribeSpotDatafeedSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  spotDatafeedSubscription?: DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription;
}
