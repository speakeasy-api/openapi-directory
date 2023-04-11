import { SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentSummary } from "./trialcomponentsummary";
/**
 * Success
 */
export declare class ListTrialComponentsResponse extends SpeakeasyBase {
    nextToken?: string;
    trialComponentSummaries?: TrialComponentSummary[];
}
