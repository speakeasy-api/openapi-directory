import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorSummary } from "./errorsummary";
import { InfoSummary } from "./infosummary";
import { SuccessSummary } from "./successsummary";
import { WarningSummary } from "./warningsummary";
export declare class InfoSummaries extends SpeakeasyBase {
    errors?: ErrorSummary[];
    informations?: InfoSummary[];
    successes?: SuccessSummary[];
    warnings?: WarningSummary[];
}
