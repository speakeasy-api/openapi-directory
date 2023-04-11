import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { StepActionTypeEnum } from "./stepactiontypeenum";
import { StepStatusEnum } from "./stepstatusenum";
import { WorkflowStepAutomationConfiguration } from "./workflowstepautomationconfiguration";
import { WorkflowStepOutput } from "./workflowstepoutput";
/**
 * Success
 */
export declare class GetWorkflowStepResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    endTime?: Date;
    lastStartTime?: Date;
    name?: string;
    next?: string[];
    noOfSrvCompleted?: number;
    noOfSrvFailed?: number;
    outputs?: WorkflowStepOutput[];
    owner?: OwnerEnum;
    previous?: string[];
    scriptOutputLocation?: string;
    status?: StepStatusEnum;
    statusMessage?: string;
    stepActionType?: StepActionTypeEnum;
    stepGroupId?: string;
    stepId?: string;
    stepTarget?: string[];
    totalNoOfSrv?: number;
    workflowId?: string;
    workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
}
