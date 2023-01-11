import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum {
    OverRepositoryLimit = "OverRepositoryLimit",
    OverStorageLimit = "OverStorageLimit"
}


export class GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_storage_overage" })
  allowStorageOverage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eligibility_reasons" })
  eligibilityReasons?: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=eligible" })
  eligible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=included_bandwidth_bytes" })
  includedBandwidthBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=included_repositories" })
  includedRepositories?: number;

  @SpeakeasyMetadata({ data: "json, name=included_storage_bytes" })
  includedStorageBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly_price_in_cents" })
  monthlyPriceInCents?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}


export class GetRegistryOptions200ApplicationJsonOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription_tiers", elemType: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers })
  subscriptionTiers?: GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers[];
}


export class GetRegistryOptions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: GetRegistryOptions200ApplicationJsonOptions;
}


export class GetRegistryOptions401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetRegistryOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRegistryOptions200ApplicationJSONObject?: GetRegistryOptions200ApplicationJson;

  @SpeakeasyMetadata()
  getRegistryOptions401ApplicationJSONObject?: GetRegistryOptions401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
