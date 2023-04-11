import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTargets } from "./deploymenttargets";
import { StackSetDriftDetectionDetails } from "./stacksetdriftdetectiondetails";
import { StackSetOperationActionEnum } from "./stacksetoperationactionenum";
import { StackSetOperationPreferences } from "./stacksetoperationpreferences";
import { StackSetOperationStatusDetails } from "./stacksetoperationstatusdetails";
import { StackSetOperationStatusEnum } from "./stacksetoperationstatusenum";
/**
 * The structure that contains information about a stack set operation.
 */
export declare class StackSetOperation extends SpeakeasyBase {
    action?: StackSetOperationActionEnum;
    administrationRoleARN?: string;
    creationTimestamp?: Date;
    deploymentTargets?: DeploymentTargets;
    endTimestamp?: Date;
    executionRoleName?: string;
    operationId?: string;
    operationPreferences?: StackSetOperationPreferences;
    retainStacks?: boolean;
    stackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
    stackSetId?: string;
    status?: StackSetOperationStatusEnum;
    statusDetails?: StackSetOperationStatusDetails;
    statusReason?: string;
}
