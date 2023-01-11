import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_storage_overage" })
  allowStorageOverage?: boolean;

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


export class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
