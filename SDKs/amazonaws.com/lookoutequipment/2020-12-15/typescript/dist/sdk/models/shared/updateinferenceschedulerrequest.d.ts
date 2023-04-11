import { SpeakeasyBase } from "../../../internal/utils";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
export declare class UpdateInferenceSchedulerRequest extends SpeakeasyBase {
    dataDelayOffsetInMinutes?: number;
    dataInputConfiguration?: InferenceInputConfiguration;
    dataOutputConfiguration?: InferenceOutputConfiguration;
    dataUploadFrequency?: DataUploadFrequencyEnum;
    inferenceSchedulerName: string;
    roleArn?: string;
}
