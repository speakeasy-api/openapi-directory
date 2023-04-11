import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetector } from "./anomalydetector";
/**
 * Success
 */
export declare class DescribeAnomalyDetectorsOutput extends SpeakeasyBase {
    anomalyDetectors?: AnomalyDetector[];
    nextToken?: string;
}
