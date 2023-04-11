import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSpecification } from "./algorithmspecification";
import { Channel } from "./channel";
import { CheckpointConfig } from "./checkpointconfig";
import { DebugHookConfig } from "./debughookconfig";
import { DebugRuleConfiguration } from "./debugruleconfiguration";
import { DebugRuleEvaluationStatus } from "./debugruleevaluationstatus";
import { ExperimentConfig } from "./experimentconfig";
import { MetricData } from "./metricdata";
import { ModelArtifacts } from "./modelartifacts";
import { OutputDataConfig } from "./outputdataconfig";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { SecondaryStatusEnum } from "./secondarystatusenum";
import { SecondaryStatusTransition } from "./secondarystatustransition";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { TensorBoardOutputConfig } from "./tensorboardoutputconfig";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
import { VpcConfig } from "./vpcconfig";
/**
 * Contains information about a training job.
 */
export declare class TrainingJob extends SpeakeasyBase {
    algorithmSpecification?: AlgorithmSpecification;
    autoMLJobArn?: string;
    billableTimeInSeconds?: number;
    /**
     * Contains information about the output location for managed spot training checkpoint data.
     */
    checkpointConfig?: CheckpointConfig;
    creationTime?: Date;
    /**
     * Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
     */
    debugHookConfig?: DebugHookConfig;
    debugRuleConfigurations?: DebugRuleConfiguration[];
    debugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];
    enableInterContainerTrafficEncryption?: boolean;
    enableManagedSpotTraining?: boolean;
    enableNetworkIsolation?: boolean;
    environment?: Record<string, string>;
    /**
     * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
     */
    experimentConfig?: ExperimentConfig;
    failureReason?: string;
    finalMetricDataList?: MetricData[];
    hyperParameters?: Record<string, string>;
    inputDataConfig?: Channel[];
    labelingJobArn?: string;
    lastModifiedTime?: Date;
    modelArtifacts?: ModelArtifacts;
    outputDataConfig?: OutputDataConfig;
    resourceConfig?: ResourceConfig;
    retryStrategy?: RetryStrategy;
    roleArn?: string;
    secondaryStatus?: SecondaryStatusEnum;
    secondaryStatusTransitions?: SecondaryStatusTransition[];
    stoppingCondition?: StoppingCondition;
    tags?: Tag[];
    /**
     * Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.
     */
    tensorBoardOutputConfig?: TensorBoardOutputConfig;
    trainingEndTime?: Date;
    trainingJobArn?: string;
    trainingJobName?: string;
    trainingJobStatus?: TrainingJobStatusEnum;
    trainingStartTime?: Date;
    trainingTimeInSeconds?: number;
    tuningJobArn?: string;
    vpcConfig?: VpcConfig;
}
