import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStatusEnum } from "./workflowstatusenum";
import { WorkflowTypeEnum } from "./workflowtypeenum";
/**
 * A workflow.
 */
export declare class WorkflowListItem extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    digest?: string;
    id?: string;
    name?: string;
    status?: WorkflowStatusEnum;
    type?: WorkflowTypeEnum;
}
