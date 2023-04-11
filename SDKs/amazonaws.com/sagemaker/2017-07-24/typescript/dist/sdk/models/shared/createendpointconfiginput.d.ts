import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfig } from "./datacaptureconfig";
import { ExplainerConfig } from "./explainerconfig";
import { ProductionVariant } from "./productionvariant";
import { Tag } from "./tag";
export declare class CreateEndpointConfigInput extends SpeakeasyBase {
    asyncInferenceConfig?: AsyncInferenceConfig;
    /**
     * Configuration to control how SageMaker captures inference data.
     */
    dataCaptureConfig?: DataCaptureConfig;
    endpointConfigName: string;
    explainerConfig?: ExplainerConfig;
    kmsKeyId?: string;
    productionVariants: ProductionVariant[];
    shadowProductionVariants?: ProductionVariant[];
    tags?: Tag[];
}
