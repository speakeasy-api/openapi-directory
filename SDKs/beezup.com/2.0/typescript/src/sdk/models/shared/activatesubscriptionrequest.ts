import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recoverBeginPeriodOrderLastModificationUtcDate" })
  recoverBeginPeriodOrderLastModificationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=recoverEndPeriodOrderLastModificationUtcDate" })
  recoverEndPeriodOrderLastModificationUtcDate?: Date;
}
