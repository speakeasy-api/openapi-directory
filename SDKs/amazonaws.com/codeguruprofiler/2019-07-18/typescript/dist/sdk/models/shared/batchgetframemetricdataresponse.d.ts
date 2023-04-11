import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationPeriodEnum } from "./aggregationperiodenum";
import { FrameMetricDatum } from "./framemetricdatum";
import { TimestampStructure } from "./timestampstructure";
/**
 * The structure representing the BatchGetFrameMetricDataResponse.
 */
export declare class BatchGetFrameMetricDataResponse extends SpeakeasyBase {
    endTime: Date;
    endTimes: TimestampStructure[];
    frameMetricData: FrameMetricDatum[];
    resolution: AggregationPeriodEnum;
    startTime: Date;
    unprocessedEndTimes: Record<string, TimestampStructure[]>;
}
