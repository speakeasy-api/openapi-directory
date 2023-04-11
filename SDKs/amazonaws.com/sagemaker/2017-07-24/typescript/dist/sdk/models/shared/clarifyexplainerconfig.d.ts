import { SpeakeasyBase } from "../../../internal/utils";
import { ClarifyInferenceConfig } from "./clarifyinferenceconfig";
import { ClarifyShapConfig } from "./clarifyshapconfig";
/**
 * The configuration parameters for the SageMaker Clarify explainer.
 */
export declare class ClarifyExplainerConfig extends SpeakeasyBase {
    enableExplanations?: string;
    inferenceConfig?: ClarifyInferenceConfig;
    shapConfig: ClarifyShapConfig;
}
