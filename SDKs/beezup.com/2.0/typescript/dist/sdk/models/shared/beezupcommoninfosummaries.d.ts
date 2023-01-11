import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonErrorSummary } from "./beezupcommonerrorsummary";
import { BeezUpCommonInfoSummary } from "./beezupcommoninfosummary";
import { BeezUpCommonSuccessSummary } from "./beezupcommonsuccesssummary";
import { BeezUpCommonWarningSummary } from "./beezupcommonwarningsummary";
export declare class BeezUpCommonInfoSummaries extends SpeakeasyBase {
    errors?: BeezUpCommonErrorSummary[];
    informations?: BeezUpCommonInfoSummary[];
    successes?: BeezUpCommonSuccessSummary[];
    warnings?: BeezUpCommonWarningSummary[];
}
