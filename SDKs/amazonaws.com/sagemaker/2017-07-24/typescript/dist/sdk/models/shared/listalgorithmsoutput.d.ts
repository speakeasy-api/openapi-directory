import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSummary } from "./algorithmsummary";
/**
 * Success
 */
export declare class ListAlgorithmsOutput extends SpeakeasyBase {
    algorithmSummaryList: AlgorithmSummary[];
    nextToken?: string;
}
