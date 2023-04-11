import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
/**
 * Defines an instance group for heterogeneous cluster training. When requesting a training job using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> API, you can configure multiple instance groups .
 */
export declare class InstanceGroup extends SpeakeasyBase {
    instanceCount: number;
    instanceGroupName: string;
    instanceType: TrainingInstanceTypeEnum;
}
