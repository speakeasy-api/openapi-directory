import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLCandidate } from "./automlcandidate";
/**
 * Success
 */
export declare class ListCandidatesForAutoMLJobResponse extends SpeakeasyBase {
    candidates: AutoMLCandidate[];
    nextToken?: string;
}
