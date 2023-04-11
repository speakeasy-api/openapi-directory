import { SpeakeasyBase } from "../../../internal/utils";
import { DeployedImage } from "./deployedimage";
import { ProductionVariantAcceleratorTypeEnum } from "./productionvariantacceleratortypeenum";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
import { ProductionVariantServerlessConfig } from "./productionvariantserverlessconfig";
import { ProductionVariantStatus } from "./productionvariantstatus";
/**
 * The production variant summary for a deployment when an endpoint is creating or updating with the <code> <a>CreateEndpoint</a> </code> or <code> <a>UpdateEndpoint</a> </code> operations. Describes the <code>VariantStatus </code>, weight and capacity for a production variant associated with an endpoint.
 */
export declare class PendingProductionVariantSummary extends SpeakeasyBase {
    acceleratorType?: ProductionVariantAcceleratorTypeEnum;
    currentInstanceCount?: number;
    currentServerlessConfig?: ProductionVariantServerlessConfig;
    currentWeight?: number;
    deployedImages?: DeployedImage[];
    desiredInstanceCount?: number;
    desiredServerlessConfig?: ProductionVariantServerlessConfig;
    desiredWeight?: number;
    instanceType?: ProductionVariantInstanceTypeEnum;
    variantName: string;
    variantStatus?: ProductionVariantStatus[];
}
