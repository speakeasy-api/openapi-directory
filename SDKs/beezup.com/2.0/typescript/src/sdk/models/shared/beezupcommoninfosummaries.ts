import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonErrorSummary } from "./beezupcommonerrorsummary";
import { BeezUpCommonInfoSummary } from "./beezupcommoninfosummary";
import { BeezUpCommonSuccessSummary } from "./beezupcommonsuccesssummary";
import { BeezUpCommonWarningSummary } from "./beezupcommonwarningsummary";



export class BeezUpCommonInfoSummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonErrorSummary })
  errors?: BeezUpCommonErrorSummary[];

  @SpeakeasyMetadata({ data: "json, name=informations", elemType: BeezUpCommonInfoSummary })
  informations?: BeezUpCommonInfoSummary[];

  @SpeakeasyMetadata({ data: "json, name=successes", elemType: BeezUpCommonSuccessSummary })
  successes?: BeezUpCommonSuccessSummary[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: BeezUpCommonWarningSummary })
  warnings?: BeezUpCommonWarningSummary[];
}
