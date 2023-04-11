import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExperimentDataStorageConfig } from "./inferenceexperimentdatastorageconfig";
import { InferenceExperimentSchedule } from "./inferenceexperimentschedule";
import { InferenceExperimentTypeEnum } from "./inferenceexperimenttypeenum";
import { ModelVariantConfig } from "./modelvariantconfig";
import { ShadowModeConfig } from "./shadowmodeconfig";
import { Tag } from "./tag";
export declare class CreateInferenceExperimentRequest extends SpeakeasyBase {
    dataStorageConfig?: InferenceExperimentDataStorageConfig;
    description?: string;
    endpointName: string;
    kmsKey?: string;
    modelVariants: ModelVariantConfig[];
    name: string;
    roleArn: string;
    schedule?: InferenceExperimentSchedule;
    shadowModeConfig: ShadowModeConfig;
    tags?: Tag[];
    type: InferenceExperimentTypeEnum;
}
