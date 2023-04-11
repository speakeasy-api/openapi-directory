import { SpeakeasyBase } from "../../../internal/utils";
import { StackSetOperationActionEnum } from "./stacksetoperationactionenum";
import { StackSetOperationPreferences } from "./stacksetoperationpreferences";
import { StackSetOperationStatusDetails } from "./stacksetoperationstatusdetails";
import { StackSetOperationStatusEnum } from "./stacksetoperationstatusenum";
/**
 * The structures that contain summary information about the specified operation.
 */
export declare class StackSetOperationSummary extends SpeakeasyBase {
    action?: StackSetOperationActionEnum;
    creationTimestamp?: Date;
    endTimestamp?: Date;
    operationId?: string;
    /**
     * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
     */
    operationPreferences?: StackSetOperationPreferences;
    status?: StackSetOperationStatusEnum;
    statusDetails?: StackSetOperationStatusDetails;
    statusReason?: string;
}
