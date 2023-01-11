import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscriptionsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AppPkgSubscription;
}


export class SubscriptionsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appPkgSubscriptionInfo?: shared.AppPkgSubscriptionInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
