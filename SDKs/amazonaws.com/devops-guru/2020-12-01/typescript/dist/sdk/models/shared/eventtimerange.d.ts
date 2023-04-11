import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
 */
export declare class EventTimeRange extends SpeakeasyBase {
    fromTime: Date;
    toTime: Date;
}
