import { SpeakeasyBase } from "../../../internal/utils";
import { LogAnomalyShowcase } from "./loganomalyshowcase";
/**
 *  An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight.
 */
export declare class AnomalousLogGroup extends SpeakeasyBase {
    impactEndTime?: Date;
    impactStartTime?: Date;
    logAnomalyShowcases?: LogAnomalyShowcase[];
    logGroupName?: string;
    numberOfLogLinesScanned?: number;
}
