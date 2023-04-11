import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentReport } from "./experimentreport";
import { ExperimentResultsData } from "./experimentresultsdata";
/**
 * Success
 */
export declare class GetExperimentResultsResponse extends SpeakeasyBase {
    details?: string;
    reports?: ExperimentReport[];
    resultsData?: ExperimentResultsData[];
    timestamps?: Date[];
}
