import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BeezUpCommonWarningSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=technicalErrorMessage" })
  technicalErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=warningArguments" })
  warningArguments?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=warningCode" })
  warningCode?: string;

  @SpeakeasyMetadata({ data: "json, name=warningMessage" })
  warningMessage?: string;
}
