import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnlineSzamlaStatusMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=human_readable_message" })
  humanReadableMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_error_code" })
  validationErrorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_result_code" })
  validationResultCode?: string;
}
