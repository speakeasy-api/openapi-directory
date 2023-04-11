import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { StepActionTypeEnum } from "./stepactiontypeenum";
import { StepStatusEnum } from "./stepstatusenum";
/**
 * The summary of the step in a migration workflow.
 */
export declare class WorkflowStepSummary extends SpeakeasyBase {
    description?: string;
    name?: string;
    next?: string[];
    noOfSrvCompleted?: number;
    noOfSrvFailed?: number;
    owner?: OwnerEnum;
    previous?: string[];
    scriptLocation?: string;
    status?: StepStatusEnum;
    statusMessage?: string;
    stepActionType?: StepActionTypeEnum;
    stepId?: string;
    totalNoOfSrv?: number;
}
