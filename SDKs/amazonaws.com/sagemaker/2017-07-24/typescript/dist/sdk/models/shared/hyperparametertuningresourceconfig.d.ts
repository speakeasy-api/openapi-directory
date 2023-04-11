import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningAllocationStrategyEnum } from "./hyperparametertuningallocationstrategyenum";
import { HyperParameterTuningInstanceConfig } from "./hyperparametertuninginstanceconfig";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
/**
 * <p>The configuration of resources, including compute instances and storage volumes for use in training jobs launched by hyperparameter tuning jobs. <code>HyperParameterTuningResourceConfig</code> is similar to <code>ResourceConfig</code>, but has the additional <code>InstanceConfigs</code> and <code>AllocationStrategy</code> fields to allow for flexible instance management. Specify one or more instance types, count, and the allocation strategy for instance selection.</p> <note> <p> <code>HyperParameterTuningResourceConfig</code> supports the capabilities of <code>ResourceConfig</code> with the exception of <code>KeepAlivePeriodInSeconds</code>. Hyperparameter tuning jobs use warm pools by default, which reuse clusters between training jobs.</p> </note>
 */
export declare class HyperParameterTuningResourceConfig extends SpeakeasyBase {
    allocationStrategy?: HyperParameterTuningAllocationStrategyEnum;
    instanceConfigs?: HyperParameterTuningInstanceConfig[];
    instanceCount?: number;
    instanceType?: TrainingInstanceTypeEnum;
    volumeKmsKeyId?: string;
    volumeSizeInGB?: number;
}
