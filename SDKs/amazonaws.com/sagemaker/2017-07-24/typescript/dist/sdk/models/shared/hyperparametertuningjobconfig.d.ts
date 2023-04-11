import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { HyperParameterTuningJobStrategyConfig } from "./hyperparametertuningjobstrategyconfig";
import { HyperParameterTuningJobStrategyTypeEnum } from "./hyperparametertuningjobstrategytypeenum";
import { ParameterRanges } from "./parameterranges";
import { ResourceLimits } from "./resourcelimits";
import { TrainingJobEarlyStoppingTypeEnum } from "./trainingjobearlystoppingtypeenum";
import { TuningJobCompletionCriteria } from "./tuningjobcompletioncriteria";
/**
 * Configures a hyperparameter tuning job.
 */
export declare class HyperParameterTuningJobConfig extends SpeakeasyBase {
    hyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;
    parameterRanges?: ParameterRanges;
    randomSeed?: number;
    resourceLimits: ResourceLimits;
    strategy: HyperParameterTuningJobStrategyTypeEnum;
    strategyConfig?: HyperParameterTuningJobStrategyConfig;
    trainingJobEarlyStoppingType?: TrainingJobEarlyStoppingTypeEnum;
    tuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}
