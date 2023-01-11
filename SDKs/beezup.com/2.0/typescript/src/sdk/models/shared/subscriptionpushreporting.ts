import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponseMessage } from "./errorresponsemessage";



// SubscriptionPushReporting
/** 
 * The subscription push reporting
**/
export class SubscriptionPushReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: ErrorResponseMessage;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=lastOrderModificationUtcDate" })
  lastOrderModificationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=maxRetryCount" })
  maxRetryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nextScheduledRetryUtcDate" })
  nextScheduledRetryUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderCount" })
  orderCount: number;

  @SpeakeasyMetadata({ data: "json, name=requestUri" })
  requestUri?: string;

  @SpeakeasyMetadata({ data: "json, name=responseUri" })
  responseUri?: string;

  @SpeakeasyMetadata({ data: "json, name=retryCount" })
  retryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;

  @SpeakeasyMetadata({ data: "json, name=succeed" })
  succeed: boolean;
}
