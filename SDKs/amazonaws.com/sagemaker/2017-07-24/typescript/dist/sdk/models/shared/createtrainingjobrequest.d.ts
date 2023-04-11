import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSpecification } from "./algorithmspecification";
import { Channel } from "./channel";
import { CheckpointConfig } from "./checkpointconfig";
import { DebugHookConfig } from "./debughookconfig";
import { DebugRuleConfiguration } from "./debugruleconfiguration";
import { ExperimentConfig } from "./experimentconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { ProfilerConfig } from "./profilerconfig";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { TensorBoardOutputConfig } from "./tensorboardoutputconfig";
import { VpcConfig } from "./vpcconfig";
export declare class CreateTrainingJobRequest extends SpeakeasyBase {
    algorithmSpecification: AlgorithmSpecification;
    checkpointConfig?: CheckpointConfig;
    /**
     * Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
     */
    debugHookConfig?: DebugHookConfig;
    debugRuleConfigurations?: DebugRuleConfiguration[];
    enableInterContainerTrafficEncryption?: boolean;
    enableManagedSpotTraining?: boolean;
    enableNetworkIsolation?: boolean;
    environment?: Record<string, string>;
    /**
     * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
     */
    experimentConfig?: ExperimentConfig;
    hyperParameters?: Record<string, string>;
    inputDataConfig?: Channel[];
    outputDataConfig: OutputDataConfig;
    /**
     * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
     */
    profilerConfig?: ProfilerConfig;
    profilerRuleConfigurations?: ProfilerRuleConfiguration[];
    resourceConfig: ResourceConfig;
    retryStrategy?: RetryStrategy;
    roleArn: string;
    stoppingCondition: StoppingCondition;
    tags?: Tag[];
    /**
     * Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.
     */
    tensorBoardOutputConfig?: TensorBoardOutputConfig;
    trainingJobName: string;
    vpcConfig?: VpcConfig;
}
