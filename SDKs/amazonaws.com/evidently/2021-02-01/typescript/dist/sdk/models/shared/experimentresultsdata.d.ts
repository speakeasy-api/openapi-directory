import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentResultResponseTypeEnum } from "./experimentresultresponsetypeenum";
/**
 * A structure that contains experiment results for one metric that is monitored in the experiment.
 */
export declare class ExperimentResultsData extends SpeakeasyBase {
    metricName?: string;
    resultStat?: ExperimentResultResponseTypeEnum;
    treatmentName?: string;
    values?: number[];
}
