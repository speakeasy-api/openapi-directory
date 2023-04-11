import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageContainerDefinition } from "./modelpackagecontainerdefinition";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";
/**
 * A structure of additional Inference Specification. Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package
 */
export declare class AdditionalInferenceSpecificationDefinition extends SpeakeasyBase {
    containers: ModelPackageContainerDefinition[];
    description?: string;
    name: string;
    supportedContentTypes?: string[];
    supportedRealtimeInferenceInstanceTypes?: ProductionVariantInstanceTypeEnum[];
    supportedResponseMIMETypes?: string[];
    supportedTransformInstanceTypes?: TransformInstanceTypeEnum[];
}
