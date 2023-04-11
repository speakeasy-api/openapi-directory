import { SpeakeasyBase } from "../../../internal/utils";
import { Baseline } from "./baseline";
/**
 * Success
 */
export declare class DescribeMonitorResponse extends SpeakeasyBase {
    baseline?: Baseline;
    creationTime?: Date;
    estimatedEvaluationTimeRemainingInMinutes?: number;
    lastEvaluationState?: string;
    lastEvaluationTime?: Date;
    lastModificationTime?: Date;
    message?: string;
    monitorArn?: string;
    monitorName?: string;
    resourceArn?: string;
    status?: string;
}
