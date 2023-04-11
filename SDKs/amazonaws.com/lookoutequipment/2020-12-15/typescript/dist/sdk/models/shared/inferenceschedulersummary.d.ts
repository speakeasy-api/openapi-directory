import { SpeakeasyBase } from "../../../internal/utils";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
import { LatestInferenceResultEnum } from "./latestinferenceresultenum";
/**
 * Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on.
 */
export declare class InferenceSchedulerSummary extends SpeakeasyBase {
    dataDelayOffsetInMinutes?: number;
    dataUploadFrequency?: DataUploadFrequencyEnum;
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    latestInferenceResult?: LatestInferenceResultEnum;
    modelArn?: string;
    modelName?: string;
    status?: InferenceSchedulerStatusEnum;
}
