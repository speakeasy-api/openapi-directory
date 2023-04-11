import { SpeakeasyBase } from "../../../internal/utils";
import { ModelInfrastructureConfig } from "./modelinfrastructureconfig";
/**
 * Contains information about the deployment options of a model.
 */
export declare class ModelVariantConfig extends SpeakeasyBase {
    infrastructureConfig: ModelInfrastructureConfig;
    modelName: string;
    variantName: string;
}
