import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncInferenceConfig } from "./asyncinferenceconfig";
import { DataCaptureConfig } from "./datacaptureconfig";
import { ExplainerConfig } from "./explainerconfig";
import { ProductionVariant } from "./productionvariant";
/**
 * Success
 */
export declare class DescribeEndpointConfigOutput extends SpeakeasyBase {
    asyncInferenceConfig?: AsyncInferenceConfig;
    creationTime: Date;
    /**
     * Configuration to control how SageMaker captures inference data.
     */
    dataCaptureConfig?: DataCaptureConfig;
    endpointConfigArn: string;
    endpointConfigName: string;
    explainerConfig?: ExplainerConfig;
    kmsKeyId?: string;
    productionVariants: ProductionVariant[];
    shadowProductionVariants?: ProductionVariant[];
}
