import { SpeakeasyBase } from "../../../internal/utils";
import { ClarifyShapBaselineConfig } from "./clarifyshapbaselineconfig";
import { ClarifyTextConfig } from "./clarifytextconfig";
/**
 * The configuration for SHAP analysis using SageMaker Clarify Explainer.
 */
export declare class ClarifyShapConfig extends SpeakeasyBase {
    numberOfSamples?: number;
    seed?: number;
    shapBaselineConfig: ClarifyShapBaselineConfig;
    textConfig?: ClarifyTextConfig;
    useLogit?: boolean;
}
