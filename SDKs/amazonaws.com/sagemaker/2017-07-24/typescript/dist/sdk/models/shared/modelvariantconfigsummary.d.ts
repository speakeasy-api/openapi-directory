import { SpeakeasyBase } from "../../../internal/utils";
import { ModelInfrastructureConfig } from "./modelinfrastructureconfig";
import { ModelVariantStatusEnum } from "./modelvariantstatusenum";
/**
 * Summary of the deployment configuration of a model.
 */
export declare class ModelVariantConfigSummary extends SpeakeasyBase {
    infrastructureConfig: ModelInfrastructureConfig;
    modelName: string;
    status: ModelVariantStatusEnum;
    variantName: string;
}
