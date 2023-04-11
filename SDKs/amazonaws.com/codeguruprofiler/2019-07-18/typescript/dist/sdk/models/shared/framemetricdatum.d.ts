import { SpeakeasyBase } from "../../../internal/utils";
import { FrameMetric } from "./framemetric";
/**
 *  Information about a frame metric and its values.
 */
export declare class FrameMetricDatum extends SpeakeasyBase {
    /**
     *  The frame name, metric type, and thread states. These are used to derive the value of the metric for the frame.
     */
    frameMetric: FrameMetric;
    values: number[];
}
