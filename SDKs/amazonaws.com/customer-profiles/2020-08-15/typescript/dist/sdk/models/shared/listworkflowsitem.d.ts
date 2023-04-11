import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { WorkflowTypeEnum } from "./workflowtypeenum";
/**
 * A workflow in list of workflows.
 */
export declare class ListWorkflowsItem extends SpeakeasyBase {
    createdAt: Date;
    lastUpdatedAt: Date;
    status: StatusEnum;
    statusDescription: string;
    workflowId: string;
    workflowType: WorkflowTypeEnum;
}
