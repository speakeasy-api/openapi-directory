package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_storage_overage")
    public Boolean allowStorageOverage;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withAllowStorageOverage(Boolean allowStorageOverage) {
        this.allowStorageOverage = allowStorageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included_bandwidth_bytes")
    public Long includedBandwidthBytes;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withIncludedBandwidthBytes(Long includedBandwidthBytes) {
        this.includedBandwidthBytes = includedBandwidthBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included_repositories")
    public Long includedRepositories;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withIncludedRepositories(Long includedRepositories) {
        this.includedRepositories = includedRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included_storage_bytes")
    public Long includedStorageBytes;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withIncludedStorageBytes(Long includedStorageBytes) {
        this.includedStorageBytes = includedStorageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_price_in_cents")
    public Long monthlyPriceInCents;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withMonthlyPriceInCents(Long monthlyPriceInCents) {
        this.monthlyPriceInCents = monthlyPriceInCents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1Tier withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}