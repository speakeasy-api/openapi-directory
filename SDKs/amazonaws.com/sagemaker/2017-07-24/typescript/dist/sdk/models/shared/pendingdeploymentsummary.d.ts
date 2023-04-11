import { SpeakeasyBase } from "../../../internal/utils";
import { PendingProductionVariantSummary } from "./pendingproductionvariantsummary";
/**
 * The summary of an in-progress deployment when an endpoint is creating or updating with a new endpoint configuration.
 */
export declare class PendingDeploymentSummary extends SpeakeasyBase {
    endpointConfigName: string;
    productionVariants?: PendingProductionVariantSummary[];
    shadowProductionVariants?: PendingProductionVariantSummary[];
    startTime?: Date;
}
