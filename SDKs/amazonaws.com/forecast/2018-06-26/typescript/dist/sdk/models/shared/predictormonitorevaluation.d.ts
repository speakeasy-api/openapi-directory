import { SpeakeasyBase } from "../../../internal/utils";
import { MetricResult } from "./metricresult";
import { MonitorDataSource } from "./monitordatasource";
import { PredictorEvent } from "./predictorevent";
/**
 * Describes the results of a monitor evaluation.
 */
export declare class PredictorMonitorEvaluation extends SpeakeasyBase {
    evaluationState?: string;
    evaluationTime?: Date;
    message?: string;
    metricResults?: MetricResult[];
    monitorArn?: string;
    monitorDataSource?: MonitorDataSource;
    numItemsEvaluated?: number;
    predictorEvent?: PredictorEvent;
    resourceArn?: string;
    windowEndDatetime?: Date;
    windowStartDatetime?: Date;
}
