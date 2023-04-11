import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExperimentStopDesiredStateEnum } from "./inferenceexperimentstopdesiredstateenum";
import { ModelVariantActionEnum } from "./modelvariantactionenum";
import { ModelVariantConfig } from "./modelvariantconfig";
export declare class StopInferenceExperimentRequest extends SpeakeasyBase {
    desiredModelVariants?: ModelVariantConfig[];
    desiredState?: InferenceExperimentStopDesiredStateEnum;
    modelVariantActions: Record<string, ModelVariantActionEnum>;
    name: string;
    reason?: string;
}
