import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
/**
 * The configuration for hyperparameter tuning resources for use in training jobs launched by the tuning job. These resources include compute instances and storage volumes. Specify one or more compute instance configurations and allocation strategies to select resources (optional).
 */
export declare class HyperParameterTuningInstanceConfig extends SpeakeasyBase {
    instanceCount: number;
    instanceType: TrainingInstanceTypeEnum;
    volumeSizeInGB: number;
}
