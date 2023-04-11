import { SpeakeasyBase } from "../../../internal/utils";
import { StackDriftDetectionStatusEnum } from "./stackdriftdetectionstatusenum";
import { StackDriftStatusEnum } from "./stackdriftstatusenum";
/**
 * Success
 */
export declare class DescribeStackDriftDetectionStatusOutput extends SpeakeasyBase {
    detectionStatus: StackDriftDetectionStatusEnum;
    detectionStatusReason?: string;
    driftedStackResourceCount?: number;
    stackDriftDetectionId: string;
    stackDriftStatus?: StackDriftStatusEnum;
    stackId: string;
    timestamp: Date;
}
