import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatum } from "./metricdatum";
export declare class PutMetricDataInput extends SpeakeasyBase {
    metricData: MetricDatum[];
    namespace: string;
}
