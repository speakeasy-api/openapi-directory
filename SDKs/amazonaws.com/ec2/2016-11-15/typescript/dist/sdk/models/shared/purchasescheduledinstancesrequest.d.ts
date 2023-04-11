import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a request to purchase Scheduled Instances.
 */
export declare class PurchaseScheduledInstancesRequestPurchaseRequests extends SpeakeasyBase {
    instanceCount: number;
    purchaseToken: string;
}
/**
 * Contains the parameters for PurchaseScheduledInstances.
 */
export declare class PurchaseScheduledInstancesRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    purchaseRequests: PurchaseScheduledInstancesRequestPurchaseRequests[];
}
