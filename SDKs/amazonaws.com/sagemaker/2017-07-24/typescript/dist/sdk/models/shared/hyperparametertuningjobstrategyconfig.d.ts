import { SpeakeasyBase } from "../../../internal/utils";
import { HyperbandStrategyConfig } from "./hyperbandstrategyconfig";
/**
 * The configuration for a training job launched by a hyperparameter tuning job. Choose <code>Bayesian</code> for Bayesian optimization, and <code>Random</code> for random search optimization. For more advanced use cases, use <code>Hyperband</code>, which evaluates objective metrics for training jobs after every epoch. For more information about strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How Hyperparameter Tuning Works</a>.
 */
export declare class HyperParameterTuningJobStrategyConfig extends SpeakeasyBase {
    hyperbandStrategyConfig?: HyperbandStrategyConfig;
}
