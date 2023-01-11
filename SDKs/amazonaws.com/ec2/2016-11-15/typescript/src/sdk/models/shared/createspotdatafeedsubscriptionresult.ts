import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
/** 
 * The fault codes for the Spot Instance request, if any.
**/
export class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription
/** 
 * The Spot Instance data feed subscription.
**/
export class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bucket?: Record<string, any>;

  @SpeakeasyMetadata()
  fault?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  prefix?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;
}


// CreateSpotDatafeedSubscriptionResult
/** 
 * Contains the output of CreateSpotDatafeedSubscription.
**/
export class CreateSpotDatafeedSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  spotDatafeedSubscription?: CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription;
}
