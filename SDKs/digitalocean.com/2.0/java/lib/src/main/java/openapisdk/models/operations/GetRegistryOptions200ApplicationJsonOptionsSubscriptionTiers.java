package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_storage_overage")
    public Boolean allowStorageOverage;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withAllowStorageOverage(Boolean allowStorageOverage) {
        this.allowStorageOverage = allowStorageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibility_reasons")
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum[] eligibilityReasons;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withEligibilityReasons(GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiersEligibilityReasonsEnum[] eligibilityReasons) {
        this.eligibilityReasons = eligibilityReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligible")
    public Boolean eligible;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withEligible(Boolean eligible) {
        this.eligible = eligible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included_bandwidth_bytes")
    public Long includedBandwidthBytes;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withIncludedBandwidthBytes(Long includedBandwidthBytes) {
        this.includedBandwidthBytes = includedBandwidthBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included_repositories")
    public Long includedRepositories;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withIncludedRepositories(Long includedRepositories) {
        this.includedRepositories = includedRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included_storage_bytes")
    public Long includedStorageBytes;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withIncludedStorageBytes(Long includedStorageBytes) {
        this.includedStorageBytes = includedStorageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly_price_in_cents")
    public Long monthlyPriceInCents;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withMonthlyPriceInCents(Long monthlyPriceInCents) {
        this.monthlyPriceInCents = monthlyPriceInCents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public GetRegistryOptions200ApplicationJsonOptionsSubscriptionTiers withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}