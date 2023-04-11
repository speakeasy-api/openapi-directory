import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
/**
 * Success
 */
export declare class StopInferenceSchedulerResponse extends SpeakeasyBase {
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    modelArn?: string;
    modelName?: string;
    status?: InferenceSchedulerStatusEnum;
}
