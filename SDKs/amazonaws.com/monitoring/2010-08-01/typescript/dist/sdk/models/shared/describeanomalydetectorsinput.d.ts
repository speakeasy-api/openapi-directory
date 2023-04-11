import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorTypeEnum } from "./anomalydetectortypeenum";
import { Dimension } from "./dimension";
export declare class DescribeAnomalyDetectorsInput extends SpeakeasyBase {
    anomalyDetectorTypes?: AnomalyDetectorTypeEnum[];
    dimensions?: Dimension[];
    maxResults?: number;
    metricName?: string;
    namespace?: string;
    nextToken?: string;
}
