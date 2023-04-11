import { SpeakeasyBase } from "../../../internal/utils";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
import { LatestInferenceResultEnum } from "./latestinferenceresultenum";
/**
 * Success
 */
export declare class DescribeInferenceSchedulerResponse extends SpeakeasyBase {
    createdAt?: Date;
    dataDelayOffsetInMinutes?: number;
    dataInputConfiguration?: InferenceInputConfiguration;
    dataOutputConfiguration?: InferenceOutputConfiguration;
    dataUploadFrequency?: DataUploadFrequencyEnum;
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    latestInferenceResult?: LatestInferenceResultEnum;
    modelArn?: string;
    modelName?: string;
    roleArn?: string;
    serverSideKmsKeyId?: string;
    status?: InferenceSchedulerStatusEnum;
    updatedAt?: Date;
}
