import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSpecification } from "./channelspecification";
import { HyperParameterSpecification } from "./hyperparameterspecification";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { MetricDefinition } from "./metricdefinition";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";
/**
 * Defines how the algorithm is used for a training job.
 */
export declare class TrainingSpecification extends SpeakeasyBase {
    metricDefinitions?: MetricDefinition[];
    supportedHyperParameters?: HyperParameterSpecification[];
    supportedTrainingInstanceTypes: TrainingInstanceTypeEnum[];
    supportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];
    supportsDistributedTraining?: boolean;
    trainingChannels: ChannelSpecification[];
    trainingImage: string;
    trainingImageDigest?: string;
}
