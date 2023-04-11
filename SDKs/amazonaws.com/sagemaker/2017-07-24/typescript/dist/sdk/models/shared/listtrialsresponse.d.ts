import { SpeakeasyBase } from "../../../internal/utils";
import { TrialSummary } from "./trialsummary";
/**
 * Success
 */
export declare class ListTrialsResponse extends SpeakeasyBase {
    nextToken?: string;
    trialSummaries?: TrialSummary[];
}
