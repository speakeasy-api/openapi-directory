import { SpeakeasyBase } from "../../../internal/utils";
import { DeployedImage } from "./deployedimage";
import { ProductionVariantServerlessConfig } from "./productionvariantserverlessconfig";
import { ProductionVariantStatus } from "./productionvariantstatus";
/**
 * Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values.
 */
export declare class ProductionVariantSummary extends SpeakeasyBase {
    currentInstanceCount?: number;
    currentServerlessConfig?: ProductionVariantServerlessConfig;
    currentWeight?: number;
    deployedImages?: DeployedImage[];
    desiredInstanceCount?: number;
    desiredServerlessConfig?: ProductionVariantServerlessConfig;
    desiredWeight?: number;
    variantName: string;
    variantStatus?: ProductionVariantStatus[];
}
