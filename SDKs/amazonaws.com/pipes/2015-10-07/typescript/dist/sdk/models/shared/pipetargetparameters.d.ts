import { SpeakeasyBase } from "../../../internal/utils";
import { PipeTargetBatchJobParameters } from "./pipetargetbatchjobparameters";
import { PipeTargetCloudWatchLogsParameters } from "./pipetargetcloudwatchlogsparameters";
import { PipeTargetEcsTaskParameters } from "./pipetargetecstaskparameters";
import { PipeTargetEventBridgeEventBusParameters } from "./pipetargeteventbridgeeventbusparameters";
import { PipeTargetHttpParameters } from "./pipetargethttpparameters";
import { PipeTargetKinesisStreamParameters } from "./pipetargetkinesisstreamparameters";
import { PipeTargetLambdaFunctionParameters } from "./pipetargetlambdafunctionparameters";
import { PipeTargetRedshiftDataParameters } from "./pipetargetredshiftdataparameters";
import { PipeTargetSageMakerPipelineParameters } from "./pipetargetsagemakerpipelineparameters";
import { PipeTargetSqsQueueParameters } from "./pipetargetsqsqueueparameters";
import { PipeTargetStateMachineParameters } from "./pipetargetstatemachineparameters";
/**
 * The parameters required to set up a target for your pipe.
 */
export declare class PipeTargetParameters extends SpeakeasyBase {
    batchJobParameters?: PipeTargetBatchJobParameters;
    cloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
    ecsTaskParameters?: PipeTargetEcsTaskParameters;
    eventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
    httpParameters?: PipeTargetHttpParameters;
    inputTemplate?: string;
    kinesisStreamParameters?: PipeTargetKinesisStreamParameters;
    lambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
    redshiftDataParameters?: PipeTargetRedshiftDataParameters;
    sageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
    sqsQueueParameters?: PipeTargetSqsQueueParameters;
    stepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
}
