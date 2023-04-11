import { SpeakeasyBase } from "../../../internal/utils";
import { BatchTransformInput } from "./batchtransforminput";
import { EndpointInput } from "./endpointinput";
/**
 * Inputs for the model explainability job.
 */
export declare class ModelExplainabilityJobInput extends SpeakeasyBase {
    batchTransformInput?: BatchTransformInput;
    /**
     * Input object for the endpoint
     */
    endpointInput?: EndpointInput;
}
