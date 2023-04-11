import { SpeakeasyBase } from "../../../internal/utils";
import { StackSetDriftDetectionStatusEnum } from "./stacksetdriftdetectionstatusenum";
import { StackSetDriftStatusEnum } from "./stacksetdriftstatusenum";
/**
 * <p>Detailed information about the drift status of the stack set.</p> <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on the stack set. Information about drift operations in-progress isn't included.</p> <p>For stack set operations, includes information about drift operations currently being performed on the stack set.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export declare class StackSetDriftDetectionDetails extends SpeakeasyBase {
    driftDetectionStatus?: StackSetDriftDetectionStatusEnum;
    driftStatus?: StackSetDriftStatusEnum;
    driftedStackInstancesCount?: number;
    failedStackInstancesCount?: number;
    inProgressStackInstancesCount?: number;
    inSyncStackInstancesCount?: number;
    lastDriftCheckTimestamp?: Date;
    totalStackInstancesCount?: number;
}
