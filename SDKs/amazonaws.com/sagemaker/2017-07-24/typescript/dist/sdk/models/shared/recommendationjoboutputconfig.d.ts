import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationJobCompiledOutputConfig } from "./recommendationjobcompiledoutputconfig";
/**
 * Provides information about the output configuration for the compiled model.
 */
export declare class RecommendationJobOutputConfig extends SpeakeasyBase {
    compiledOutputConfig?: RecommendationJobCompiledOutputConfig;
    kmsKeyId?: string;
}
