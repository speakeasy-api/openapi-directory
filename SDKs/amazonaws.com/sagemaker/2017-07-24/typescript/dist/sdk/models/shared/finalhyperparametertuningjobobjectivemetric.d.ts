import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobObjectiveTypeEnum } from "./hyperparametertuningjobobjectivetypeenum";
/**
 * Shows the latest objective metric emitted by a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
 */
export declare class FinalHyperParameterTuningJobObjectiveMetric extends SpeakeasyBase {
    metricName: string;
    type?: HyperParameterTuningJobObjectiveTypeEnum;
    value: number;
}
