import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStepItem } from "./workflowstepitem";
import { WorkflowTypeEnum } from "./workflowtypeenum";
/**
 * Success
 */
export declare class GetWorkflowStepsResponse extends SpeakeasyBase {
    items?: WorkflowStepItem[];
    nextToken?: string;
    workflowId?: string;
    workflowType?: WorkflowTypeEnum;
}
