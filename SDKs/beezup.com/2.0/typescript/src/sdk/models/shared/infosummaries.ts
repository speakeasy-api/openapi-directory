import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorSummary } from "./errorsummary";
import { InfoSummary } from "./infosummary";
import { SuccessSummary } from "./successsummary";
import { WarningSummary } from "./warningsummary";



export class InfoSummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorSummary })
  errors?: ErrorSummary[];

  @SpeakeasyMetadata({ data: "json, name=informations", elemType: InfoSummary })
  informations?: InfoSummary[];

  @SpeakeasyMetadata({ data: "json, name=successes", elemType: SuccessSummary })
  successes?: SuccessSummary[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: WarningSummary })
  warnings?: WarningSummary[];
}
