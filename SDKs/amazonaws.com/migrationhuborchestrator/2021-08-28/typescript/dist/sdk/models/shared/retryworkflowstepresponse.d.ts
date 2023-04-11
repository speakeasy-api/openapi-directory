import { SpeakeasyBase } from "../../../internal/utils";
import { StepStatusEnum } from "./stepstatusenum";
/**
 * Success
 */
export declare class RetryWorkflowStepResponse extends SpeakeasyBase {
    id?: string;
    status?: StepStatusEnum;
    stepGroupId?: string;
    workflowId?: string;
}
