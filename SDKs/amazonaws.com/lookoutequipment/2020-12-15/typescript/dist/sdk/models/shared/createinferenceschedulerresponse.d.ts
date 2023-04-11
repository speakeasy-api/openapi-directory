import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
/**
 * Success
 */
export declare class CreateInferenceSchedulerResponse extends SpeakeasyBase {
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    status?: InferenceSchedulerStatusEnum;
}
