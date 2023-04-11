import { SpeakeasyBase } from "../../../internal/utils";
import { ShadowModelVariantConfig } from "./shadowmodelvariantconfig";
/**
 *  The configuration of <code>ShadowMode</code> inference experiment type, which specifies a production variant to take all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also specifies the percentage of requests that Amazon SageMaker replicates.
 */
export declare class ShadowModeConfig extends SpeakeasyBase {
    shadowModelVariants: ShadowModelVariantConfig[];
    sourceModelVariantName: string;
}
