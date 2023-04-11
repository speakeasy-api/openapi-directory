import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExperimentDataStorageConfig } from "./inferenceexperimentdatastorageconfig";
import { InferenceExperimentSchedule } from "./inferenceexperimentschedule";
import { ModelVariantConfig } from "./modelvariantconfig";
import { ShadowModeConfig } from "./shadowmodeconfig";
export declare class UpdateInferenceExperimentRequest extends SpeakeasyBase {
    dataStorageConfig?: InferenceExperimentDataStorageConfig;
    description?: string;
    modelVariants?: ModelVariantConfig[];
    name: string;
    schedule?: InferenceExperimentSchedule;
    shadowModeConfig?: ShadowModeConfig;
}
