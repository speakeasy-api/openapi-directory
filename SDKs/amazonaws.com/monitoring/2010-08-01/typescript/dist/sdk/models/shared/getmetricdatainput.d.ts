import { SpeakeasyBase } from "../../../internal/utils";
import { LabelOptions } from "./labeloptions";
import { MetricDataQuery } from "./metricdataquery";
import { ScanByEnum } from "./scanbyenum";
export declare class GetMetricDataInput extends SpeakeasyBase {
    endTime: Date;
    labelOptions?: LabelOptions;
    maxDatapoints?: number;
    metricDataQueries: MetricDataQuery[];
    nextToken?: string;
    scanBy?: ScanByEnum;
    startTime: Date;
}
