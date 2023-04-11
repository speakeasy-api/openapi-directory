import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonErrorSummary } from "./beezupcommonerrorsummary";
import { BeezUPCommonInfoSummary } from "./beezupcommoninfosummary";
import { BeezUPCommonSuccessSummary } from "./beezupcommonsuccesssummary";
import { BeezUPCommonWarningSummary } from "./beezupcommonwarningsummary";
export declare class BeezUPCommonInfoSummaries extends SpeakeasyBase {
    errors?: BeezUPCommonErrorSummary[];
    informations?: BeezUPCommonInfoSummary[];
    successes?: BeezUPCommonSuccessSummary[];
    warnings?: BeezUPCommonWarningSummary[];
}
