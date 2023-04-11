import { SpeakeasyBase } from "../../../internal/utils";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
/**
 * The endpoint configuration made by Inference Recommender during a recommendation job.
 */
export declare class EndpointOutputConfiguration extends SpeakeasyBase {
    endpointName: string;
    initialInstanceCount: number;
    instanceType: ProductionVariantInstanceTypeEnum;
    variantName: string;
}
