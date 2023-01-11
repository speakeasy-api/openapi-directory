import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionAvailabilityStatusEnum } from "./consumptionavailabilitystatusenum";
import { ErrorResponseMessage } from "./errorresponsemessage";
import { SubscriptionLinks } from "./subscriptionlinks";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";



// SubscriptionIndex
/** 
 * The subscription definition
**/
export class SubscriptionIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerHealthStatus" })
  consumerHealthStatus?: ConsumptionAvailabilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=consumerLastRequestSentUri" })
  consumerLastRequestSentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerUnvailableSinceUtcDate" })
  consumerUnvailableSinceUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastErrorMessage" })
  lastErrorMessage?: ErrorResponseMessage;

  @SpeakeasyMetadata({ data: "json, name=lastOrderPushedModificationUtcDate" })
  lastOrderPushedModificationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastRetryUtcDate" })
  lastRetryUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastSuccessfulOrderPushedUtcDate" })
  lastSuccessfulOrderPushedUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: SubscriptionLinks;

  @SpeakeasyMetadata({ data: "json, name=maxRetryCount" })
  maxRetryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantApplicationName" })
  merchantApplicationName: string;

  @SpeakeasyMetadata({ data: "json, name=merchantApplicationVersion" })
  merchantApplicationVersion: string;

  @SpeakeasyMetadata({ data: "json, name=merchantEmailAlert" })
  merchantEmailAlert?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nextScheduledRetryUtcDate" })
  nextScheduledRetryUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=recoverBeginPeriodOrderLastModificationUtcDate" })
  recoverBeginPeriodOrderLastModificationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=recoverEndPeriodOrderLastModificationUtcDate" })
  recoverEndPeriodOrderLastModificationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=retryCount" })
  retryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: SubscriptionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl: string;
}
