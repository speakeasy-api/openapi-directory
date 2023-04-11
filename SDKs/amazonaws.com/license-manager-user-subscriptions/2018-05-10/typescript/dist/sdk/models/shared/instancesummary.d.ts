import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an EC2 instance providing user-based subscriptions.
 */
export declare class InstanceSummary extends SpeakeasyBase {
    instanceId: string;
    lastStatusCheckDate?: string;
    products: string[];
    status: string;
    statusMessage?: string;
}
