import { SpeakeasyBase } from "../../../internal/utils";
import { SageMakerPipelineParameter } from "./sagemakerpipelineparameter";
/**
 * The templated target type for the Amazon SageMaker <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html"> <code>StartPipelineExecution</code> </a> API operation.
 */
export declare class SageMakerPipelineParameters extends SpeakeasyBase {
    pipelineParameterList?: SageMakerPipelineParameter[];
}
