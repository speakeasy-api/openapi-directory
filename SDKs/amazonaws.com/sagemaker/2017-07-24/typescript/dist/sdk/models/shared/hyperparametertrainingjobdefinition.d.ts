import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { CheckpointConfig } from "./checkpointconfig";
import { HyperParameterAlgorithmSpecification } from "./hyperparameteralgorithmspecification";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { HyperParameterTuningResourceConfig } from "./hyperparametertuningresourceconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { ParameterRanges } from "./parameterranges";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { StoppingCondition } from "./stoppingcondition";
import { VpcConfig } from "./vpcconfig";
/**
 * Defines the training jobs launched by a hyperparameter tuning job.
 */
export declare class HyperParameterTrainingJobDefinition extends SpeakeasyBase {
    algorithmSpecification: HyperParameterAlgorithmSpecification;
    /**
     * Contains information about the output location for managed spot training checkpoint data.
     */
    checkpointConfig?: CheckpointConfig;
    definitionName?: string;
    enableInterContainerTrafficEncryption?: boolean;
    enableManagedSpotTraining?: boolean;
    enableNetworkIsolation?: boolean;
    environment?: Record<string, string>;
    /**
     * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>The maximum number of items specified for <code>Array Members</code> refers to the maximum number of hyperparameters for each range and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of hyperparameters for all the ranges can't exceed the maximum number specified.</p> </note>
     */
    hyperParameterRanges?: ParameterRanges;
    hyperParameterTuningResourceConfig?: HyperParameterTuningResourceConfig;
    inputDataConfig?: Channel[];
    outputDataConfig: OutputDataConfig;
    resourceConfig?: ResourceConfig;
    retryStrategy?: RetryStrategy;
    roleArn: string;
    staticHyperParameters?: Record<string, string>;
    stoppingCondition: StoppingCondition;
    /**
     * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter.
     */
    tuningObjective?: HyperParameterTuningJobObjective;
    vpcConfig?: VpcConfig;
}
