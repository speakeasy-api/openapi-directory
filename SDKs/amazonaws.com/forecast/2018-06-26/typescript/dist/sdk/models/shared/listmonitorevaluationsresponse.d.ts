import { SpeakeasyBase } from "../../../internal/utils";
import { PredictorMonitorEvaluation } from "./predictormonitorevaluation";
/**
 * Success
 */
export declare class ListMonitorEvaluationsResponse extends SpeakeasyBase {
    nextToken?: string;
    predictorMonitorEvaluations?: PredictorMonitorEvaluation[];
}
