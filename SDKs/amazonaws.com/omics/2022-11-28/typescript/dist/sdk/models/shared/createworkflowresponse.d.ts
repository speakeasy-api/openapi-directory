import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowStatusEnum } from "./workflowstatusenum";
/**
 * Success
 */
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    arn?: string;
    id?: string;
    status?: WorkflowStatusEnum;
    tags?: Record<string, string>;
}
