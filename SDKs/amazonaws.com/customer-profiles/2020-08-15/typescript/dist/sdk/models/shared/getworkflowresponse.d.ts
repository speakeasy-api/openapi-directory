import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { WorkflowAttributes } from "./workflowattributes";
import { WorkflowMetrics } from "./workflowmetrics";
import { WorkflowTypeEnum } from "./workflowtypeenum";
/**
 * Success
 */
export declare class GetWorkflowResponse extends SpeakeasyBase {
    attributes?: WorkflowAttributes;
    errorDescription?: string;
    lastUpdatedAt?: Date;
    metrics?: WorkflowMetrics;
    startDate?: Date;
    status?: StatusEnum;
    workflowId?: string;
    workflowType?: WorkflowTypeEnum;
}
