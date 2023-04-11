import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetStatusEnum } from "./changesetstatusenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 * The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's associated.
 */
export declare class ChangeSetSummary extends SpeakeasyBase {
    changeSetId?: string;
    changeSetName?: string;
    creationTime?: Date;
    description?: string;
    executionStatus?: ExecutionStatusEnum;
    includeNestedStacks?: boolean;
    parentChangeSetId?: string;
    rootChangeSetId?: string;
    stackId?: string;
    stackName?: string;
    status?: ChangeSetStatusEnum;
    statusReason?: string;
}
