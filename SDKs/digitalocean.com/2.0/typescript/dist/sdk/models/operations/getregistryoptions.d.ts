import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum {
    OverRepositoryLimit = "OverRepositoryLimit",
    OverStorageLimit = "OverStorageLimit"
}
export declare class GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers extends SpeakeasyBase {
    allowStorageOverage?: boolean;
    eligibilityReasons?: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum[];
    eligible?: boolean;
    includedBandwidthBytes?: number;
    includedRepositories?: number;
    includedStorageBytes?: number;
    monthlyPriceInCents?: number;
    name?: string;
    slug?: string;
}
export declare class GetRegistryOptions200ApplicationJsonOptions extends SpeakeasyBase {
    subscriptionTiers?: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers[];
}
export declare class GetRegistryOptions200ApplicationJson extends SpeakeasyBase {
    options?: GetRegistryOptions200ApplicationJsonOptions;
}
export declare class GetRegistryOptions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetRegistryOptionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getRegistryOptions200ApplicationJSONObject?: GetRegistryOptions200ApplicationJson;
    getRegistryOptions401ApplicationJSONObject?: GetRegistryOptions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
