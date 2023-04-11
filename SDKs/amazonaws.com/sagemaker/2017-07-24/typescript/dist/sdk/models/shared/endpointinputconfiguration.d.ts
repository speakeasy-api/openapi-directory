import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentParameterRanges } from "./environmentparameterranges";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
/**
 * The endpoint configuration for the load test.
 */
export declare class EndpointInputConfiguration extends SpeakeasyBase {
    environmentParameterRanges?: EnvironmentParameterRanges;
    inferenceSpecificationName?: string;
    instanceType: ProductionVariantInstanceTypeEnum;
}
