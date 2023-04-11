import { SpeakeasyBase } from "../../../internal/utils";
import { IntervalEnum } from "./intervalenum";
import { MetricTypeEnum } from "./metrictypeenum";
export declare class GetSnapshotsRequest extends SpeakeasyBase {
    indexId: string;
    interval: IntervalEnum;
    maxResults?: number;
    metricType: MetricTypeEnum;
    nextToken?: string;
}
