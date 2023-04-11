import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSummary } from "./experimentsummary";
/**
 * Success
 */
export declare class ListExperimentsResponse extends SpeakeasyBase {
    experiments?: ExperimentSummary[];
    nextToken?: string;
}
