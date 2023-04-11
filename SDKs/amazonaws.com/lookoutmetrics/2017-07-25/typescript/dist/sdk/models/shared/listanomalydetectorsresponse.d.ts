import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorSummary } from "./anomalydetectorsummary";
/**
 * Success
 */
export declare class ListAnomalyDetectorsResponse extends SpeakeasyBase {
    anomalyDetectorSummaryList?: AnomalyDetectorSummary[];
    nextToken?: string;
}
