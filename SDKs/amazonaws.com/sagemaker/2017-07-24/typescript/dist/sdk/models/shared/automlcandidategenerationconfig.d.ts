import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLAlgorithmConfig } from "./automlalgorithmconfig";
/**
 * Stores the configuration information for how a candidate is generated (optional).
 */
export declare class AutoMLCandidateGenerationConfig extends SpeakeasyBase {
    algorithmsConfig?: AutoMLAlgorithmConfig[];
    featureSpecificationS3Uri?: string;
}
