import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Docker container image configuration object for the model explainability job.
 */
export declare class ModelExplainabilityAppSpecification extends SpeakeasyBase {
    configUri: string;
    environment?: Record<string, string>;
    imageUri: string;
}
