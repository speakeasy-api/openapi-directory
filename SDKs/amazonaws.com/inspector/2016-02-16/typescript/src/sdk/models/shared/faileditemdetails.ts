import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedItemErrorCodeEnum } from "./faileditemerrorcodeenum";



export class FailedItemDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: FailedItemErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=retryable" })
  retryable?: boolean;
}
