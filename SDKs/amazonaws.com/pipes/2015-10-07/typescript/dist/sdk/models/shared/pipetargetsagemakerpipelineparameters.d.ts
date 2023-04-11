import { SpeakeasyBase } from "../../../internal/utils";
import { SageMakerPipelineParameter } from "./sagemakerpipelineparameter";
/**
 * The parameters for using a SageMaker pipeline as a target.
 */
export declare class PipeTargetSageMakerPipelineParameters extends SpeakeasyBase {
    pipelineParameterList?: SageMakerPipelineParameter[];
}
