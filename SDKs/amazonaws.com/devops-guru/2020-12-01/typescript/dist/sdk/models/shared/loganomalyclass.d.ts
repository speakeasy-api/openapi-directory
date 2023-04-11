import { SpeakeasyBase } from "../../../internal/utils";
import { LogAnomalyTypeEnum } from "./loganomalytypeenum";
/**
 *  Information about an anomalous log event found within a log group.
 */
export declare class LogAnomalyClass extends SpeakeasyBase {
    explanation?: string;
    logAnomalyToken?: string;
    logAnomalyType?: LogAnomalyTypeEnum;
    logEventId?: string;
    logEventTimestamp?: Date;
    logStreamName?: string;
    numberOfLogLinesOccurrences?: number;
}
