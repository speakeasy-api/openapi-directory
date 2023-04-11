import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroup } from "./instancegroup";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
/**
 * Describes the resources, including machine learning (ML) compute instances and ML storage volumes, to use for model training.
 */
export declare class ResourceConfig extends SpeakeasyBase {
    instanceCount?: number;
    instanceGroups?: InstanceGroup[];
    instanceType?: TrainingInstanceTypeEnum;
    keepAlivePeriodInSeconds?: number;
    volumeKmsKeyId?: string;
    volumeSizeInGB: number;
}
